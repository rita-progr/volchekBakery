import {SideBarSchema} from "../types/SideBarSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: SideBarSchema = {
    collapsed: false,
}

const sidebarSlice = createSlice({
    name : 'sidebarSlice',
    initialState,
    reducers: {
        toggleCollapsed: (state, action: PayloadAction<boolean>) => {
            state.collapsed = action.payload;
        }
    }
})

export const {reducer: sideBarReducer, actions:sideBarActions} = sidebarSlice;