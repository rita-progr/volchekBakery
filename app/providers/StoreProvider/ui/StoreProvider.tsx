import {ReactNode} from "react";
import {StateSchema} from "../config/StateSchema";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {createReduxStore} from "../config/store.ts";
import {Provider} from "react-redux";

interface StoreProvideProps{
    children: ReactNode;
    initialState?: Partial<StateSchema>
    asuncReducers?: Partial<ReducersMapObject<StateSchema>>,
}

export const StoreProvider = (props: StoreProvideProps) => {
    const {
        children,
        initialState,
        asuncReducers
    } = props;

    const store = createReduxStore(initialState as StateSchema, asuncReducers as ReducersMapObject<StateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}