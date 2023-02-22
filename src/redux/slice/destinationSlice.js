import { createSlice } from '@reduxjs/toolkit';
const initialState = () => {
  return {
    destinations: [
      {
        name: '1',
        days: '1',
        fact: '1',
      },
      {
        name: '2',
        days: '2',
        fact: '2',
      },
      {
        name: '3',
        days: '3',
        fact: '3',
      },
    ],
    destionstionSelected: null,
  };
};
export const destinationSlice = createSlice({
  name: 'destination',
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destionstionSelected = action.payload;
      console.log(action);
    },
  },
});
export const { destinationClicked } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
