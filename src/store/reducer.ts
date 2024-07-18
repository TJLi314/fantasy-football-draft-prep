import { combineReducers } from "redux";
import quarterbackTiersSlice from "./tiers/quarterbackTiersSlice";
import runningbackTiersSlice from "./tiers/runningbackTiersSlice";
import receiverTiersSlice from "./tiers/receiverTiersSlice";
import tightendTiersSlice from "./tiers/tightendTiersSlice";
import quarterbacksSlice from "./players/quarterbacksSlice";
import receiversSlice from "./players/receiversSlice";
import runningbacksSlice from "./players/runningbacksSlice";
import tightendsSlice from "./players/tightendsSlice";

const tiersSlice = combineReducers({
  quarterbackTiers: quarterbackTiersSlice,
  runningbackTiers: runningbackTiersSlice,
  receiverTiers: receiverTiersSlice,
  tightendTiers: tightendTiersSlice,
});

const playersSlice = combineReducers({
  quarterbacks: quarterbacksSlice,
  runningbacks: runningbacksSlice,
  receivers: receiversSlice,
  tightends: tightendsSlice,
});

export default combineReducers({
  tiers: tiersSlice,
  players: playersSlice,
});
