/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { toggleCheckbox, toggleAllCheckboxes, setAllCheckboxes } from './actions';

const initialState = {
  allChecked: false,
  checkboxes: {
    withoutTransfer: true,
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

      // Обновляем allChecked на основе текущего состояния всех чекбоксов
      state.allChecked = Object.values(state.checkboxes).every((value) => value);

      // Если все чекбоксы выключены, оставляем "без пересадок" включенным
      const allCheckboxesOff = !Object.values(state.checkboxes).some((value) => value);
      if (allCheckboxesOff) {
        state.checkboxes.withoutTransfer = true;
      }
    })
    .addCase(toggleAllCheckboxes, (state) => {
      if (state.allChecked) {
        // Сбрасываем все чекбоксы
        Object.keys(state.checkboxes).forEach((key) => {
          state.checkboxes[key] = false;
        });
        // Всегда оставляем "без пересадок" включенным
        state.checkboxes.withoutTransfer = true;
        state.allChecked = false; // Обновляем, так как не все чекбоксы активны
      } else {
        // Включаем все чекбоксы
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
