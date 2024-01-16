import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bookingsTimeMethod: [],
};

export const bookingsTypeSlice = createSlice({
	name: 'bookingsType',
	initialState,
	reducers: {
		fetchData: (state, { payload }) => {
			state.bookingsTimeMethod = payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { fetchData } = bookingsTypeSlice.actions;

export default bookingsTypeSlice.reducer;
