import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addtoCart: [],
  isLoading: false,
  isError: false
};

const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      console.log('Adding to cart:', action.payload); // Debugging line
      state.addtoCart.push(action.payload);
    },
    removeSingleCart: (state, action) => {
      state.addtoCart = state.addtoCart.filter(item => item.id !== action.payload.id); // Removes item by ID
    },
    loadingCart: (state) => {
      state.isLoading = true;
    },
    errorCart: (state) => {
      state.isError = true;
    }
  }
});

// Exporting actions and reducer
export const { addtoCart, removeSingleCart, loadingCart, errorCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
