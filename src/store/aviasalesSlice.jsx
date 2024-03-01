import { createSlice } from '@reduxjs/toolkit';

export const aviasalesSlice = createSlice({
  name: 'aviasales',
  initialState: {
    activeButton: 'cheapest',
  },
  reducers: {
    choosePrice: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activeButton = action.payload;
    },
  },
});

export const { choosePrice } = aviasalesSlice.actions;

export default aviasalesSlice.reducer;
