import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../common";

const tightendsSlice = createSlice({
  name: "tightends",
  initialState: [] as Player[],
  reducers: {
    tightendsLoaded: (_state, action) => {
      return action.payload.players;
    },
    changeTightendRank: (state, action) => {
      const player = state.find((player) => player.name == action.payload.name);
      if (player) player.rank = action.payload.rank;
    },
  },
});

export const { tightendsLoaded, changeTightendRank } = tightendsSlice.actions;
export default tightendsSlice.reducer;
