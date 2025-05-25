// slices/productsSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  limit: 10,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    increaseLimit: (state) => {
      state.limit += 10;
    },
  },
});

export const { setProducts, increaseLimit } = productsSlice.actions;
export default productsSlice.reducer;
