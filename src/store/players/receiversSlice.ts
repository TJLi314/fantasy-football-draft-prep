import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../common";

const receiversSlice = createSlice({
  name: "Receivers",
  initialState: [] as Player[],
  reducers: {
    receiversLoaded: (_state, action) => {
      return action.payload.players;
    },
    changeReceiverRank: (state, action) => {
      const player = state.find((player) => player.name == action.payload.name);
      if (player) player.rank = action.payload.rank;
    },
  },
});

export const { receiversLoaded, changeReceiverRank } = receiversSlice.actions;
export default receiversSlice.reducer;
