import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const cartSlice = createSlice({
    name : 'cart',
    initialState: [1,2,3,5,6,2],
    reducers: {
        updateCartItems: (state, action) => {
            console.log('Inside cart functionality', action.payload)
        }
    }
})

export const {updateCartItems} = cartSlice.actions

export const useCartStore = () => {
    const cartItems = useSelector(state => state.cart)
    const dispath = useDispatch()
    return {
        cartItems,
        updateCartItems : (payload)=> dispath(updateCartItems(payload))
    }
    
}

export default cartSlice.reducer