import { createSlice } from "@reduxjs/toolkit";

const initialState : string[] = []

export const carSlice = createSlice({
    name:"Car",
    initialState,
    reducers: {
        addNew: (state, action) => {
            return [...state, action.payload]
        }
    }

})

export const {addNew} =  carSlice.actions;
export default  carSlice.reducer;