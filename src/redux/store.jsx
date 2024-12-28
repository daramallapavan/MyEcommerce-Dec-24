import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import cartReducer from './CartSlice'
import placeOrderReducer from './placeOrder'
import deliveryReducer from './deliverySlice'

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        cartItem: cartReducer,
        placeOrder: placeOrderReducer,
        deliveryAddress: deliveryReducer
      
    },
})