/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { toggleActive } from './actions';

const initialState = {
  active: 'cheapest',
};

const aviasalesReducerButtons = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleActive, (state, action) => {
      state.active = action.payload;
    });
});

export default aviasalesReducerButtons;
