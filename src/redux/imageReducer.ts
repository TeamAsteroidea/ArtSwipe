import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import artUrlArray from '../../dummyData/artUrlArray';

interface ImageObj {
  id: number;
  bidders: string[] | never[];
  bidIncrementPrice: number;
  bidStartingPrice: number;
  artist: string;
  name: string;
  currentOwner: string;
  image: string;
  date_auctioned: number;
  bidDuration: number;
}

interface ImageState {
  imagesArrayObj: ImageObj[];
  rendered: ImageObj[];
  filtered: ImageObj[];
  completed: ImageObj[];
}


const initialState: ImageState = {
  imagesArrayObj: artUrlArray,
  rendered: [],
  filtered: [],
  completed: artUrlArray.filter(art => art.bidDuration === 0),
};

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action: PayloadAction<ImageObj>) => {
      state.imagesArrayObj = [...state.imagesArrayObj, action.payload];
    },
    getImages: (state, action) => {
      [state.imagesArrayObj] = action.payload;
      state.rendered = state.imagesArrayObj
    }
  },
});

export const { addImages, getImages } = imageSlice.actions;

export default imageSlice.reducer;
