import {BunDetailsSchema} from "../types/BunDetailsSchema.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: BunDetailsSchema = {
    isLoading: false,
    error: '',
}

const BunDetailsSlice = createSlice({
    name: 'BunDetailsSlice',
    initialState,
    reducers: {
        setBun:(state, action)=>{
            state.bun = action.payload;
        }
    }
})

export const {actions: BunDetailsAction, reducer: BunDetailsReducer } = BunDetailsSlice;