import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addChildToParent, findAndDeleteRow, findAndUpdateRowById } from "../utils/utils";
import { EntityType, PayloadForStore, slice } from "../types/types";

export type AppSlice = {
    data: EntityType[];
    isUpdatingRow: boolean;
    isAddingRow: boolean;
    activeRowId: number;
}

const initialState: AppSlice = {
    data: [],
    isUpdatingRow: false,
    isAddingRow: false,
    activeRowId: 0
}

export const appSlice = createSlice({
    name: slice.app,
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        addRow: (state, action: PayloadAction<PayloadForStore>) => {
            addChildToParent(state.data, action.payload.rowId, action.payload.res.current);
        },
        changeRow: (state, action: PayloadAction<PayloadForStore>) => {
            findAndUpdateRowById(state.data, action.payload.rowId, action.payload.res.current);
        },
        setIsUpdatingRow: (state, action: PayloadAction<boolean>) => {
            state.isUpdatingRow = action.payload;
        },
        setIsAddingRow: (state, action: PayloadAction<boolean>) => {
            state.isAddingRow = action.payload;
        },
        deleteRowFromState: (state, action: PayloadAction<number>) => {
            findAndDeleteRow(state.data, action.payload);
        },
        setActiveRowId: (state, action: PayloadAction<number>) => {
            state.activeRowId = action.payload;
        }
    }
});

export const {
    setData,
    addRow,
    changeRow,
    setIsAddingRow,
    setIsUpdatingRow,
    deleteRowFromState,
    setActiveRowId
} = appSlice.actions;