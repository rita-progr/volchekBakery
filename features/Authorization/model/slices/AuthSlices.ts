import {AuthSchema} from "../types/AuthSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthSchema = {
    isLoading: false,
    error: null,
    validateErrors:{},
    bakeryId:'',
    password:'',
    email:'',
}

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setRepeatPassword: (state, action: PayloadAction<string>) => {
            state.repeatPassword = action.payload;
        },
        setErrors: (state, action: PayloadAction<{ email?: string; password?: string , repeatPassword?:string}>) => {
            state.validateErrors = action.payload;
        },
        setBakeryId: (state, action) => {
            state.bakeryId = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        resetForm: () => initialState,
    },
})

export const {reducer: AuthReducer, actions: AuthActions} = authSlice