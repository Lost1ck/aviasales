/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { toggleCheckbox, toggleAllCheckboxes, setAllCheckboxes } from './actions';

const initialState = {
  allChecked: false,
  checkboxes: {
    withoutTransfer: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
};

const aviasalesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleCheckbox, (state, action) => {
      const { checkboxName } = action.payload;
      state.checkboxes[checkboxName] = !state.checkboxes[checkboxName];
      state.allChecked = Object.values(state.checkboxes).every((value) => value);
    })
    .addCase(toggleAllCheckboxes, (state) => {
      if (state.allChecked) {
        Object.keys(state.checkboxes).forEach((key) => {
          state.checkboxes[key] = false;
        });
        // state.checkboxes.withoutTransfer = true;
        state.allChecked = false;
      } else {
        Object.keys(state.checkboxes).forEach((key) => {
          state.checkboxes[key] = true;
        });
        state.allChecked = true;
      }
    })
    .addCase(setAllCheckboxes, (state) => {
      Object.keys(state.checkboxes).forEach((key) => {
        state.checkboxes[key] = true;
      });
      state.allChecked = true;
    });
});

export default aviasalesReducer;
