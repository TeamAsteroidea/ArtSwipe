import { configureStore } from "@reduxjs/toolkit";

import imageSlice from "./imageReducer";

export const store = configureStore({
  reducer: {
    images: imageSlice,
    // user: userSlice,
  },
});
