import { createSlice } from '@reduxjs/toolkit';
import artUrlArray from '../../dummyData/artUrlArray.js';

const initialState = {
  imagesArrayObj: artUrlArray,
};

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images = [...state.imagesArrayObj, ...action.payload];
    },
  },
});

export const { addImages } = imageSlice.actions;

export default imageSlice.reducer;
