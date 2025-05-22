import {PlaceAnOrderSchema} from "../types/PlaceAnOrderSchema.tsx";
import {createSlice} from "@reduxjs/toolkit";

const initialState: PlaceAnOrderSchema = {
    price: '',
    info: []
}

const placeAnOrderSlice = createSlice({
    name: 'PlaceAnOrder',
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setInfo: (state, action) => {
            state.info = action.payload
        }
    }
})

export const {reducer: placeAnOrderReducer, actions: PlaceAnOrderActions} = placeAnOrderSlice;