
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart: []
}

export const cartSlice=createSlice({
    name: 'cartItem',
    initialState: initialState,
    reducers: {
        addToCart: (state,action)=>{
       
            const newItem=action.payload;

            const existingItem=state.cart.find(item=>item.id==newItem.id);

            if(!existingItem){
                state.cart.push({...newItem})
            }
           

            // if(!existingItem){

            //     state.cart.push({...newItem,quantity:1})
            // }else{
            //     existingItem.quantity++;
            // }

        }
    }
})


export const {addToCart} =cartSlice.actions

export default cartSlice.reducer