/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { setOnlineStatus, setOfflineStatus } from './actions';

const initialState = {
  isOnline: navigator.onLine,
};
// при отсутсвие соединения, способно показать компоненты

const networkReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOnlineStatus, (state) => {
      state.isOnline = true;
    })
    .addCase(setOfflineStatus, (state) => {
      state.isOnline = false;
    });
});

export default networkReducer;
