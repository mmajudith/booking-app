import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authReducer';
import bookingsTypeSlice from './bookingsTypesReducer';

export default combineReducers({
	authSlice,
	bookingsTypeSlice,
});
