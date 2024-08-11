import { combineReducers } from "@reduxjs/toolkit";
import { dataApi } from "./data-api";



export const rootReducer = combineReducers({
    [dataApi.reducerPath]: dataApi.reducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;