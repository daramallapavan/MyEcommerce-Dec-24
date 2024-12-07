import { createSlice } from "@reduxjs/toolkit";


const initialValue = {
    id : "",
    name : "",
    price : "",
    quantity: "",
    description: "",
    imageUrl: "",
    totalPrice: ""
}

const cartSlice  = createSlice({
    name : 'cart',
    initialState : initialValue,
    reducers : {
        setStoreCartData : (state,action) =>{
            state.id = action.payload?.id
            state.name  = action.payload?.name
            state.price = action.payload?.price
            state.quantity  = action.payload?.quantity
            state.description = action.payload?.description
            state.imageUrl  = action.payload?.imageUrl
            state.totalPrice = action.payload?.totalPrice
        },
     
    }
})

export const { setStoreCartData} = cartSlice.actions

export default cartSlice.reducer