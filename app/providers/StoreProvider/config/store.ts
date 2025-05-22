import {StateSchema, ThunkExtraArgs} from "./StateSchema.ts";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {sideBarReducer} from "widgets/Sidebar";
import {createReducerManager} from "./reduxManager.ts";
import {$api} from "shared/api/api.ts";
import {CartReducer} from "features/Cart";
import {rtkApi} from "shared/api/rtkApi.tsx";
import {ProfileReducer} from "entities/Profile";
import {placeAnOrderReducer} from "features/PlaceAnOrder";
import {AuthReducer} from "features/Authorization/model/slices/AuthSlices.ts";
import {orderReducer} from "features/OrderManagment";
import {BunDetailsReducer} from "entities/BunDetails";

export const createReduxStore = (initialState?: StateSchema, asyncReducers?:  ReducersMapObject<StateSchema>)=>{

    const extraArg: ThunkExtraArgs = {
        api: $api,
    }

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        sideBar: sideBarReducer,
        profile: ProfileReducer,
        order: placeAnOrderReducer,
        auth: AuthReducer,
        bun: BunDetailsReducer,
        adminOrder:orderReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        cart: CartReducer
    }

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: import.meta.env.DEV,
        preloadedState:initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        }).concat(rtkApi.middleware)
    });
    //@ts-expect-error: This is a temporary workaround for a known issue
    store.reducerManager = reducerManager;
    return store;
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']