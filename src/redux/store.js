import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./exampleReducer";
import imageSlice from "./imageReducer";

export const store = configureStore({
  reducer: {
    message: exampleReducer,
    images: imageSlice,
  },
});
