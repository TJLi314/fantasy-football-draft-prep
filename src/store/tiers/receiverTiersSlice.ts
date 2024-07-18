import { createSlice } from "@reduxjs/toolkit";
import { Player, Tier } from "../../common";

let lastRank = 0;

const receiverTiersSlice = createSlice({
  name: "receiverTiers",
  initialState: [] as Tier[],
  reducers: {
    receiverTiersLoaded: (_state, action) => {
      lastRank = action.payload.tiers.length - 1;
      return action.payload.tiers;
    },
    receiverTierAdded: (state) => {
      lastRank += 1;
      return [...state, { rank: lastRank, players: [] as Player[] }];
    },

    receiverTierRemoved: (state) => {
      lastRank -= 1;
      state.pop();
      return state;
    },

    playerAddedIntoReceiverTier: (state, action) => {
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
  receiverTiersLoaded,
  receiverTierAdded,
  receiverTierRemoved,
  playerAddedIntoReceiverTier,
} = receiverTiersSlice.actions;
export default receiverTiersSlice.reducer;
