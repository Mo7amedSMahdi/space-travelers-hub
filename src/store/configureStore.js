import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import thunk from 'redux-thunk';
import api from "./middleware/api";
import missionsReducer from "./missions";
import rocketReducer from "./rocket";

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), api],
});

export default store;
