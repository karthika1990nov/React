import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../component/task6/counter/counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
