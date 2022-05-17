import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
// import axios from 'axios';
import { apiCallBegan } from './api';

const url = '/missions';
const slice = createSlice({
  name: 'missions',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    missionsRequested: (mission) => {
      mission.loading = true;
    },
    missionsRecieved: (mission, action) => {
      mission.list = action.payload;
      mission.loading = false;
      mission.lastFetch = Date.now();
    },
    missionsRequestFailed: (mission) => {
      mission.loading = false;
    },
  },
});

export const { missionsRequested, missionsRecieved, missionsRequestFailed } = slice.actions;
export default slice.reducer;

// const missionsRecieved = createAction('missionsRecieved');

export const getMissions = () => async (dispatch, getState) => {
  const { lastFetch } = getState().missions;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: missionsRequested.type,
      onSuccess: missionsRecieved.type,
      onError: missionsRequestFailed.type,
    }),
  );
};
