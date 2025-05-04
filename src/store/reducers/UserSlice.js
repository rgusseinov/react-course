import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchUsers } from "./ActionCreator";

const initialState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0,
}

/* export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.count += action.payload
		},
		useFetching(state){
			state.isLoading = true;
		},
		useFetchingSuccess(state, action: PayloadAction){
			state.isLoading = false;
			state.error = '';
			state.users = action.payload
		},
		useFetchingError(state, action: PayloadAction){
			state.isLoading = false;
			state.error = action.payload;
		},
			
	}
}); */

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
		.addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction) => {
			state.isLoading = false;
			state.error = '';
			state.users = action.payload
		})
		.addCase(fetchUsers.pending.type, (state) => {
			state.isLoading = true;
		})
		.addCase(fetchUsers.rejected.type, (state, action: PayloadAction) => {
			state.isLoading = false;
			state.error = action.payload
		})
	},
})


export default userSlice.reducer;