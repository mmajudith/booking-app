import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk('login', async (user, thunkAPI) => {
	const { email } = user;

	if (email) {
		localStorage.setItem('user', email);
	}

	return email;
});

export const logOut = createAsyncThunk('logout', async () => {
	const user = localStorage.getItem('user');

	if (user) {
		localStorage.removeItem('user');
	}

	return null;
});
