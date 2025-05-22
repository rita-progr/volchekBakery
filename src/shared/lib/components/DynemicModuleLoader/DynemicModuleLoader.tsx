import {FC, ReactNode, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {Reducer} from "@reduxjs/toolkit";
import {ReduxWithStoreManager, StateSchemaKeys} from "../../../../app/providers/StoreProvider/config/StateSchema.ts";
import {AppDispatch} from "../../../../app/providers/StoreProvider";


export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer
}



interface DynemicModuleLoaderProps{
    children?: ReactNode;
    reducers?: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynemicModuleLoader: FC<DynemicModuleLoaderProps> = (props) => {
    const {children, reducers = {} ,  removeAfterUnmount = true,} = props;
    const store = useStore() as ReduxWithStoreManager;
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        const moutedReducers = store.reducerManager.getReducerMap()
        Object.entries(reducers).forEach(([name,reducer])=>{
            const mounted = moutedReducers[name as StateSchemaKeys];
            if(!mounted){
                store.reducerManager.add(name as StateSchemaKeys , reducer);
                dispatch({type: `@INIT ${name} reducer`});
            }
        })

        return ()=>{
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({type: `@DESTROY ${name} reducer`});
                })
            }

        }
        //eslint-disable-next-line
    }, []);
    return (
    <>
        { children }
    </>
    )
}