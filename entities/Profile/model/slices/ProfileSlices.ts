import {createSlice} from "@reduxjs/toolkit";
import {Profile} from "../types/ProfileSchema.ts";

const initialState: Profile = {
    name: '',
    photo: '',
    email: '',
}

const profileSlice = createSlice({
    name: 'profileEdit',
    initialState,
    reducers: {
        setEmail: (state, action)=>{
            state.email = action.payload;
        },
        setPhoto: (state, action)=>{
            state.photo = action.payload;
        },
        setName: (state, action)=>{
            state.name = action.payload;
        },
    }
})

export const {reducer: ProfileReducer, actions: profileActions} = profileSlice;