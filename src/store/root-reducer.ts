import { combineReducers } from "@reduxjs/toolkit";
import { dataApi } from "./data-api";
import { appSlice } from "./app-slice";
import { slice } from "../types/types";



export const rootReducer = combineReducers({
    [dataApi.reducerPath]: dataApi.reducer,
    [slice.app]: appSlice.reducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;