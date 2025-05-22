import {FilterEnum, OrderSchema} from "../types/orderSchema.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: OrderSchema = {
    filter: FilterEnum.ALL
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setFilter: (state, action)=>{
            state.filter = action.payload
        }
    }
})

export const {actions: orderActions, reducer: orderReducer} = orderSlice;