import { createSlice } from "@reduxjs/toolkit";
import createSelector from "reselect";
import { Player, Tier } from "../common";

let lastRank = 0;

const tiersSlice = createSlice({
  name: "Tiers",
  initialState: [] as Tier[],
  reducers: {
    tiersLoaded: (state, action) => {
      lastRank = action.payload.tiers.length - 1;
      return action.payload.tiers;
    },
    tierAdded: (state) => {
      lastRank += 1;
      return [...state, { rank: lastRank, players: [] as Player[] }];
    },

    tierRemoved: (state) => {
      lastRank -= 1;
      state.pop();
      return state;
    },

    playerAddedIntoTier: (state, action) => {
      state[action.payload.rank].players.push(action.payload.player);
      return state;
    },
  },
});

export const { tiersLoaded, tierAdded, tierRemoved, playerAddedIntoTier } =
  tiersSlice.actions;
// export const getTiers = createSelector((state) => state);
export default tiersSlice.reducer;
