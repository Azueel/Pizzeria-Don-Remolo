import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/auth';
import { modalReducer } from '../slices/modal/modalSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
	},
});
