import { configureStore } from "@reduxjs/toolkit";

import imageSlice from './imageReducer'

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    message: exampleReducer,
=======
>>>>>>> 21aa142dc7c47b7e815fa91aafbadf2076838c1a
    images: imageSlice,
  },
});
