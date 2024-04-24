import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        reset: () => initialState,
        
    }
});

const { actions, reducer } = itemSlice;
export const { reset } = actions;
export default reducer;
