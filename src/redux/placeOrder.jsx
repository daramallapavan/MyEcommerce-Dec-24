import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectedCartItems: [],
}

export const placeOrder=createSlice({
    name: 'placeOrder',
    initialState: initialState,
    reducers: {
        clickPlaceOrder: (state,action)=>{
       
             state.selectedCartItems=action?.payload;

        }
    }
})


export const {clickPlaceOrder} =placeOrder.actions

export default placeOrder.reducer