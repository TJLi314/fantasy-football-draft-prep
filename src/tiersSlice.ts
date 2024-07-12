import { createSlice } from "@reduxjs/toolkit";
import { Player, Tier } from "./common";

let lastRank = 0;

const tiersSlice = createSlice({
  name: "Tiers",
  initialState: [] as Tier[],
  reducers: {
    tierAdded: (state) => {
      lastRank += 1;
      state = [...state, { rank: lastRank, players: [] as Player[] }];
    },

    tierRemoved: (state) => {
      state.pop();
    },

    playerAddedIntoTier: (state, action) => {
      state[action.payload.rank].players.push(action.payload.player);
    },
  },
});

export const { tierAdded, tierRemoved, playerAddedIntoTier } =
  tiersSlice.actions;
export default tiersSlice.reducer;
