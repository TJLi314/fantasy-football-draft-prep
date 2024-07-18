import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../common";

const runningbacksSlice = createSlice({
  name: "runningbacks",
  initialState: [] as Player[],
  reducers: {
    runningbacksLoaded: (state, action) => {
      return action.payload.players;
    },
    changeRunningbackRank: (state, action) => {
      const player = state.find((player) => player.name == action.payload.name);
      if (player) player.rank = action.payload.rank;
    },
  },
});

export const { runningbacksLoaded, changeRunningbackRank } =
  runningbacksSlice.actions;
export default runningbacksSlice.reducer;
