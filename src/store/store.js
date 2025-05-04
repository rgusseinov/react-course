import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

const rootReducers = combineReducers({
	userReducer
});


const store = configureStore({
	reducer: rootReducers
})

export default store;