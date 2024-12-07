import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    id : null,
    name : '',
    price : '',
    quantity: '',


}

const productSlice  = createSlice({
    name : 'product',
    initialState : initialValue,
    reducers : {
        setProductList : (state,action) =>{
            state.id = action.payload?.id
            state.name  = action.payload?.name
            state.price = action.payload?.price
            state.quantity  = action.payload?.quantity
       
        },
     
    }
})

export const { setProductList} = productSlice.actions

export default productSlice.reducer