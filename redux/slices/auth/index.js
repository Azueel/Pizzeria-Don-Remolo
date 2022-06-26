import { createSlice } from '@reduxjs/toolkit';
import { loging } from '../../../services/authService';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		auth: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
			loging();
		},
	},
});

export const { auth, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
