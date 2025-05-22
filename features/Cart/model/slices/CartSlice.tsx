import {CartSchema} from "../types/CartSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CartSchema = {
    isLoading: false,
    error: null,
    info: [],
    productIds: [],
    sum: 0
}

const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addItem: (state, action)=>{
            state.productIds?.push(action.payload)
            localStorage.setItem("cartProductIds", JSON.stringify(state.productIds))
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.productIds = state.productIds?.filter(id => id !== action.payload);
        },
        setCart: (state, action: PayloadAction<string[]>) => {
            state.productIds = action.payload;
        },
        sum: (state, action) => {
            state.sum = action.payload;
        },
        setGoods: (state, action) => {
            state.info = action.payload;
        }
    }
})

export const {reducer: CartReducer, actions: CartActions} = CartSlice;