import { configureStore } from '@reduxjs/toolkit';
import aviasalesReducer from './reducer';
import aviasalesReducerButtons from './reducer.top';

const store = configureStore({
  reducer: {
    aviasales: aviasalesReducer,
    tabs: aviasalesReducerButtons,
  },
});

export default store;
