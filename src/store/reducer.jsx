/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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

const aviasalesReducer = createReducer(initialState, (build) => {
  build
    .addCase(toggleCheckbox, (state, action) => {
      const { checkboxName } = action.payload;
      state.checkboxes[checkboxName] = !state.checkboxes[checkboxName];
      if (Object.keys(state.checkboxes).every((key) => key !== 'allChecked')
      && Object.values(state.checkboxes).every((value) => value)) {
        state.allChecked = true;
      } else {
        state.allChecked = false;
      }
    })
    .addCase(toggleAllCheckboxes, (state) => {
      const allChecked = Object.values(state.checkboxes).every((value) => value);
      state.allChecked = !allChecked;
      for (const key in state.checkboxes) {
        state.checkboxes[key] = state.allChecked;
      }
    })
    .addCase(setAllCheckboxes, (state) => {
      state.allChecked = true;
      for (const key in state.checkboxes) {
        state.checkboxes[key] = true;
      }
    });
});

export default aviasalesReducer;
