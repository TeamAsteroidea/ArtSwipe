import { configureStore } from "@reduxjs/toolkit";

import imageSlice from './imageReducer'
import userSlice from './userReducer'
import eventSlice from "./eventReducer"

export const store = configureStore({
  reducer: {
    images: imageSlice,
    user: userSlice,
    events: eventSlice,
  },
});
