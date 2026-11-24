// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSliceSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer
  },
});
