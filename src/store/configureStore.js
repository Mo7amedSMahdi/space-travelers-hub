import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import api from './middleware/api';
import missionsReducer from './missions';

const rootReducer = combineReducers({ missions: missionsReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    // logger({ destination: "console" }),\
    api,
  ],
});

export default store;
