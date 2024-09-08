import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'success',
  content: '',
  duration: 3000,
  open: false
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    showSnackbar: (state, action) => {
      const data = action.payload;
      state.type = data.type;
      state.content = data.content;
      state.open = true;
      state.duration = 3000;
    },
    clearSnackbar: (state) => {
      state.open = false;
      state.content = '';
      state.duration = '';
    },
  },
});

export const { showSnackbar, clearSnackbar } = snackbarSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSnackbar = (state) => state.snackbar;

export default snackbarSlice.reducer;
