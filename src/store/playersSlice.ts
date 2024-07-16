import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../common";

const playersSlice = createSlice({
  name: "Players",
  initialState: [] as Player[],
  reducers: {
    playersLoaded: (state, action) => {
      return action.payload.players;
    },
  },
});

export const { playersLoaded } = playersSlice.actions;
export default playersSlice.reducer;
