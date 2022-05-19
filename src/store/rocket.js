import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./api";

const url = "/rockets";
const slice = createSlice({
  name: "rockets",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    rocketsRequested: (rockets) => {
      rockets.loading = true;
    },
    rocketsRecieved: (rockets, action) => {
      rockets.list = action.payload;
      rockets.loading = false;
      rockets.lastFetch = Date.now();
    },
    rocketsRequestFailed: (rocket) => {
      rocket.loading = false;
    },
    joinRocket: (rocket, action) => {
      const index = rocket.list.findIndex((m) => m.id === action.payload);
      rocket.list[index].reserved = true;
    },
    leaveRocket: (rocket, action) => {
      const index = rocket.list.findIndex((m) => m.id === action.payload);
      rocket.list[index].reserved = false;
    },
  },
});

export const {
  rocketsRequested,
  rocketsRecieved,
  rocketsRequestFailed,
  joinRocket,
  leaveRocket,
} = slice.actions;
export default slice.reducer;
// const missionsRecieved = createAction('missionsRecieved');
export const getRockets = () => async (dispatch, getState) => {
  const { lastFetch } = getState().missions;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: rocketsRequested.type,
      onSuccess: rocketsRecieved.type,
      onError: rocketsRequestFailed.type,
    }),
  );
};
