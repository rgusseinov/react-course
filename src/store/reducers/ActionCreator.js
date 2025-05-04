import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/* export const fetchUsers = () => async (dispatch) => {
	try {
		dispatch(userSlice.actions.useFetching());
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');

		dispatch(userSlice.actions.useFetchingSuccess(response.data))
	} catch (e){
		dispatch(userSlice.actions.useFetchingError(e.message))
	}
} */


export const fetchUsers = createAsyncThunk(
	'users/fetchAll',
  async (_, thunkAPI) => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			return response.data;
		} catch (e){
			return thunkAPI.rejectWithValue(`Не удалось загрузить пользователей ${e.message}}`);
		}
  }
);