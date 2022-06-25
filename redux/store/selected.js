import { createSlice } from "@reduxjs/toolkit";

export const selected = createSlice({
    name:'selected',
    initialState:{value:''},
    reducers:{
        selec:(state,action)=> {
            state.value = action.payload
        }
    }
})

export const {selec} = selected.actions;

export default selected.reducer;