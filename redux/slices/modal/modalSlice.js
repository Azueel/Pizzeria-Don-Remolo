import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		login: false,
		register: false,
		menu: false,
	},
	reducers: {
		handleModal: (state, action) => {
			if(action.payload === 'login') {
				if(state.register) state.register = false;
				state.login = !state.login;
			} else if(action.payload === 'register') {
				if(state.register) state.login = false;
				state.register = !state.register;
			} else if(action.payload === 'menu') {
				console.log(action.payload)
				state.menu = !state.menu;
			}
		},
	}
});

export const { handleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;