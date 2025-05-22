import {StateSchema} from "app/providers/StoreProvider";

export const getAuthEmail = (state: StateSchema) => state.auth?.email || ''
export const getAuthPassword = (state: StateSchema) => state.auth?.password || ''
export const getAuthRepeatPassword = (state: StateSchema) => state.auth?.repeatPassword || ''
export const getValidateError = (state: StateSchema) => state.auth?.validateErrors || ''
export const getAuthBakeryId = (state: StateSchema) => state.auth?.bakeryId || ''