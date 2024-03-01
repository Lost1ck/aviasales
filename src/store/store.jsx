import { configureStore } from '@reduxjs/toolkit';
import aviasalesReducer from './reducer';

const store = configureStore({
  reducer: {
    aviasales: aviasalesReducer,
  },
});

export default store;
