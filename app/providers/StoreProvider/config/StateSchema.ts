import {SideBarSchema} from "widgets/Sidebar";
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {CombinedState} from "@reduxjs/toolkit/query";
import {AxiosInstance} from "axios";
import {CartSchema} from "features/Cart";
import {AuthSchema} from "features/Authorization";
import {rtkApi} from "shared/api/rtkApi.tsx";
import {Profile} from "entities/Profile";
import {PlaceAnOrderSchema} from "features/PlaceAnOrder";
import {OrderSchema} from "features/OrderManagment";
import {BunDetailsSchema} from "entities/BunDetails";

export interface StateSchema {
    sideBar: SideBarSchema
    cart: CartSchema
    profile: Profile
    order: PlaceAnOrderSchema
    auth: AuthSchema
    bun: BunDetailsSchema
    adminOrder: OrderSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKeys = keyof StateSchema;

export interface reduxManagerInterface{
    getReducerMap: () => ReducersMapObject<StateSchema>;
    //@ts-expect-error: This is a temporary workaround for a known issue
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add : (key: StateSchemaKeys, reducer: Reducer)=> void;
    remove : (key: StateSchemaKeys)=> void;
}

export interface ReduxWithStoreManager extends  EnhancedStore<StateSchema>{
    reducerManager:reduxManagerInterface;
}

export interface ThunkExtraArgs{
    api:AxiosInstance;
}


export interface ThunkConfig<T>{
    extra: ThunkExtraArgs;
    state: StateSchema;
    rejectValue: T;
}
