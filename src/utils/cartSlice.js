import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', 
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state, action) => {
            // vanilla (older) Redux => Dont Mutate the state (we did mutate by following code)
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState

            //here we have to mutate the state
            //Redux uses Immer behind the scene 
          state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) => {
           state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;