import {StateSchema} from "app/providers/StoreProvider";

export const getProfileName = (state: StateSchema) => state.profile.name ?? '';
export const getProfileEmail = (state: StateSchema) => state.profile.email ?? '';
export const getProfilePhoto = (state: StateSchema) => state.profile.photo ?? '';
