import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "./common";
import PlayerInfo from "./components/PlayerInfo";
import PlayerList from "./components/PlayerList";
import TierList from "./components/TierList";
import { playersLoaded } from "./store/playersSlice";
import { tierAdded, tierRemoved, tiersLoaded } from "./store/tiersSlice";

const initialTiers = [
  {
    rank: 0,
    players: [
      { name: "Ceedee Lamb", rank: 0 },
      { name: "Tyreek Hill", rank: 0 },
      { name: "Ja'Marr Chase", rank: 0 },
    ],
  },
  {
    rank: 1,
    players: [
      { name: "Amon-Ra St. Brown", rank: 1 },
      { name: "AJ Brown", rank: 1 },
      { name: "Justin Jefferson", rank: 1 },
      { name: "Puka Nakua", rank: 1 },
    ],
  },
  { rank: 2, players: [] },
  { rank: 3, players: [] },
  { rank: 4, players: [] },
];

const initialPlayers = [
  { name: "Ceedee Lamb", rank: 0 },
  { name: "Tyreek Hill", rank: 0 },
  { name: "Ja'Marr Chase", rank: 0 },
  { name: "Amon-Ra St. Brown", rank: 1 },
  { name: "AJ Brown", rank: 1 },
  { name: "Justin Jefferson", rank: 1 },
  { name: "Puka Nakua", rank: 1 },
  { name: "Garret Wilson", rank: -1 },
  { name: "Davante Adams", rank: -1 },
  { name: "Drake London", rank: -1 },
  { name: "Deebo Samuel", rank: -1 },
  { name: "Marvin Harrison Jr", rank: -1 },
];

function Home() {
  const dispatch = useDispatch();
  const tiers = useSelector((state: any) => state.tiers);
  const players = useSelector((state: any) => state.players);

  console.log("Tiers: ", tiers);
  console.log("Players: ", players);

  useEffect(() => {
    dispatch(tiersLoaded({ tiers: initialTiers }));
  }, []);

  useEffect(() => {
    dispatch(playersLoaded({ players: initialPlayers }));
  }, []);

  const [selectedPlayer, setSelectedPlayer] = useState<Player>({} as Player);

  return (
    <Box display="flex" flexDirection="row">
      <div>
        <Button onClick={() => dispatch(tierAdded())}>Add Tier</Button>
        <Button onClick={() => dispatch(tierRemoved())}>Remove Tier</Button>
        <TierList />
      </div>
      <div>
        <PlayerInfo player={selectedPlayer} />
        <PlayerList onClick={(player: Player) => setSelectedPlayer(player)} />
      </div>
    </Box>
  );
}

export default Home;
