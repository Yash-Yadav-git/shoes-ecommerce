import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    updateCartItems: (state, action) => {
      const { payload } = action;
      state.push(payload);
    },
    updateQuantityAdd: (state, action) => {
      const { payload } = action;
      state[payload].quantity += 1;
    },
    updateQuantitySub: (state, action) => {
      const { payload } = action;
      state[payload].quantity -= 1;
    },
  },
});

export const { updateCartItems, updateQuantityAdd, updateQuantitySub } =
  cartSlice.actions;

export const useCartStore = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispath = useDispatch();
  return {
    cartItems,
    updateCartItems: (payload) => dispath(updateCartItems(payload)),
    updateQuantityAdd: (payload) => dispath(updateQuantityAdd(payload)),
    updateQuantitySub: (payload) => dispath(updateQuantitySub(payload)),
  };
};

export default cartSlice.reducer;
