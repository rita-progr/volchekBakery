import {AnyAction, combineReducers, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {reduxManagerInterface, StateSchema, StateSchemaKeys} from "./StateSchema";


export function createReducerManager(initialReducers:ReducersMapObject<StateSchema>):reduxManagerInterface {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKeys[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = {...state}
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }

            // @ts-expect-error: This is type for reduxManager, idk how fix it
            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        }
    } as reduxManagerInterface
}
