import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./exampleReducer";
import imageSlice from "./imageReducer";
import userSlice from ""

export const store = configureStore({
  reducer: {
    message: exampleReducer,
    images: imageSlice,
    // user: userSlice,
  },
});
