import { createSlice } from '@reduxjs/toolkit';
import artUrlArray from '../../dummyData/artUrlArray.js';

const initialState = {
  imagesArray: artUrlArray,
};

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images = [...state.imagesArray, ...action.payload];
    },
  },
});

export const { addImages } = imageSlice.actions;

export default imageSlice.reducer;
