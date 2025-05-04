import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";

const rootReducers = combineReducers({
	userReducer,
	[postAPI.reducerPath]: postAPI.reducer
});


const store = configureStore({
	reducer: rootReducers,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
})

export default store;