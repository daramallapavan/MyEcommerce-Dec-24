import { createSlice } from "@reduxjs/toolkit";

const initialState={
   data:
   {
    fullname: "",
    number: "",
    alternatenumber:"",
    pincode: "",
    state: "",
    city: "",
    houseno: "",
    area:"",
    type: "Work"
   }
}

export const deliverySice=createSlice({
    name: 'deliveryAddress',
    initialState: initialState,
    reducers: {
        deliveryAddressStore: (state,action)=>{
            state.fullname=action?.payload.fullname
            state.number=action?.payload.number
            state.alternatenumber=action?.payload.alternatenumber
            state.pincode=action?.payload.pincode
            state.state=action?.payload.state
            state.city=action?.payload.city
            state.houseno=action?.payload.houseno
            state.type=action?.payload.type
       }

        
    }
})


export const {deliveryAddressStore} =deliverySice.actions

export default deliverySice.reducer