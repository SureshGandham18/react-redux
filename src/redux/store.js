import { configureStore } from '@reduxjs/toolkit';
import { destinationReducer } from './slice/destinationSlice';
import { counterReducer } from './slice/counterSlice';

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});
