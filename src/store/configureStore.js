import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import missionsReducer from './missions';

const rootReducer = combineReducers({ missions: missionsReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
