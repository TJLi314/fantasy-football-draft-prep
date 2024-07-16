import { combineReducers } from "redux";
import tiersSlice from "./tiersSlice";
import playersSlice from "./playersSlice";

export default combineReducers({
  tiers: tiersSlice,
  players: playersSlice,
});
