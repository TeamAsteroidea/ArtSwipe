import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./exampleReducer";
import imageSlice from "./imageReducer";
import eventSlice from "./eventReducer"

export const store = configureStore({
  reducer: {
    message: exampleReducer,
    images: imageSlice,
    events: eventSlice,
  },
});
