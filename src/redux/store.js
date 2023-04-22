import { configureStore } from '@reduxjs/toolkit'

import exampleReducer from './exampleReducer';

export const store = configureStore({
  reducer: {
    message: exampleReducer
  }
});