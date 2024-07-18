import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../common";

const quarterbacksSlice = createSlice({
  name: "quarterbacks",
  initialState: [] as Player[],
  reducers: {
    quarterbacksLoaded: (_state, action) => {
      return action.payload.players;
    },
    changeQuarterbackRank: (state, action) => {
      const player = state.find((player) => player.name == action.payload.name);
      if (player) player.rank = action.payload.rank;
    },
  },
});

export const { quarterbacksLoaded, changeQuarterbackRank } =
  quarterbacksSlice.actions;
export default quarterbacksSlice.reducer;
