import {OrdersSchema} from "../types/OrdersSchema.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: OrdersSchema = {
    orders: [],
    isLoading: false,
    error: null,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {}
})

export const {reducer: OrdersReducer, actions: OrdersActions} = ordersSlice