import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './blogsSlice';
import snackbarReducer from './snackbarSlice';

export default configureStore({
	reducer: {
		blogs: blogsReducer,
		snackbar: snackbarReducer
	},
});