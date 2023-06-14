import cartReducer from '../features/cart/cartSlice'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})