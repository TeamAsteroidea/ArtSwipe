import { configureStore } from "@reduxjs/toolkit";

import imageSlice from "./imageReducer";
import userSlice from "./userReducer";
import eventSlice from "./eventReducer";
import messagesSlice from "./messagesReducer";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    images: imageSlice,
    user: userSlice,
    events: eventSlice,
    messages: messagesSlice,
  },
});
