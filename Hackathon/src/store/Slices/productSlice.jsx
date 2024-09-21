import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  isError: false
};

export const fetchData = createAsyncThunk('products/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.products = [];
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true; // Set isError to true on rejection
      });
  }
});

// Exporting the reducer
export default productSlice.reducer;
