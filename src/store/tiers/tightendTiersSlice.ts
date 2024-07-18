import { createSlice } from "@reduxjs/toolkit";
import { Player, Tier } from "../../common";

let lastRank = 0;

const tightendTiersSlice = createSlice({
  name: "tightendTiers",
  initialState: [] as Tier[],
  reducers: {
    tightendTiersLoaded: (_state, action) => {
      lastRank = action.payload.tiers.length - 1;
      return action.payload.tiers;
    },
    tightendTierAdded: (state) => {
      lastRank += 1;
      return [...state, { rank: lastRank, players: [] as Player[] }];
    },

    tightendTierRemoved: (state) => {
      lastRank -= 1;
      state.pop();
      return state;
    },

    playerAddedIntoTightendTier: (state, action) => {
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
  tightendTiersLoaded,
  tightendTierAdded,
  tightendTierRemoved,
  playerAddedIntoTightendTier,
} = tightendTiersSlice.actions;
export default tightendTiersSlice.reducer;
