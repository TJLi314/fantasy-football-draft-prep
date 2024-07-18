import { createSlice } from "@reduxjs/toolkit";
import { Player, Tier } from "../../common";

let lastRank = 0;

const quarterbackTiersSlice = createSlice({
  name: "quarterbackTiers",
  initialState: [] as Tier[],
  reducers: {
    quarterbackTiersLoaded: (state, action) => {
      lastRank = action.payload.tiers.length - 1;
      return action.payload.tiers;
    },
    quarterbackTierAdded: (state) => {
      lastRank += 1;
      return [...state, { rank: lastRank, players: [] as Player[] }];
    },

    quarterbackTierRemoved: (state) => {
      lastRank -= 1;
      state.pop();
      return state;
    },

    playerAddedIntoQuarterbackTier: (state, action) => {
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
  quarterbackTiersLoaded,
  quarterbackTierAdded,
  quarterbackTierRemoved,
  playerAddedIntoQuarterbackTier,
} = quarterbackTiersSlice.actions;
export default quarterbackTiersSlice.reducer;
