import { createSlice } from "@reduxjs/toolkit";

export const points = createSlice({
    name:'points',
    initialState:{value:0},
    reducers:{
        normalSum:(state, action) => {
            state.value +=1
        },
        normalLess:(state, action) => {
            if(state.value > 0) {
                state.value -=1
            }
        },
        lizard:(state,action) => {
            state.value +=2
        },
        state:(state, action) => {
            state.value = action.payload
        }
    }
})

export const {normalSum, normalLess, lizard, state} = points.actions;

export default points.reducer;