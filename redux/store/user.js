import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name:'user',
    initialState:{value:''},
    reducers:{
        add:(state,action)=> {
            state.value = action.payload
        }
    }
})

export const {add} = user.actions;

export default user.reducer;