import { createSlice } from "@reduxjs/toolkit";
import { Player, Tier } from "../../common";

let lastRank = 0;

const runningbackTiersSlice = createSlice({
  name: "runningbackTiers",
  initialState: [] as Tier[],
  reducers: {
    runningbackTiersLoaded: (state, action) => {
      lastRank = action.payload.tiers.length - 1;
      return action.payload.tiers;
    },
    runningbackTierAdded: (state) => {
      lastRank += 1;
      return [...state, { rank: lastRank, players: [] as Player[] }];
    },

    runningbackTierRemoved: (state) => {
      lastRank -= 1;
      state.pop();
      return state;
    },

    playerAddedIntoRunningbackTier: (state, action) => {
      const { rank, player } = action.payload;
      console.log(action.payload);
      if (player.rank != -1) {
        state[player.rank].players = state[player.rank].players.filter(
          (tierPlayer) => tierPlayer.name !== player.name
        );
      }
      state[rank].players.push(player);
      return state;
    },
  },
});

export const {
  runningbackTiersLoaded,
  runningbackTierAdded,
  runningbackTierRemoved,
  playerAddedIntoRunningbackTier,
} = runningbackTiersSlice.actions;
export default runningbackTiersSlice.reducer;
