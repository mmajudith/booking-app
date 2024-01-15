import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from '../actionsCreator/loginAndLogoutActions';

const initialState = {
	currentUser: localStorage.getItem('user') || null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(logIn.fulfilled, (state, { payload }) => {
			state.currentUser = payload;
		});
		builder.addCase(logOut.fulfilled, (state, { payload }) => {
			state.currentUser = payload;
		});
	},
});

export default authSlice.reducer;
