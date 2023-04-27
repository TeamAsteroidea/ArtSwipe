import { configureStore } from "@reduxjs/toolkit";

import imageSlice from './imageReducer'
import userSlice from './userReducer'

export const store = configureStore({
  reducer: {
    images: imageSlice,
    user: userSlice,
  },
});
