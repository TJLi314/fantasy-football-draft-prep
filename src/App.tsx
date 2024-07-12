import { Box, Button } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import TierList from "./components/TierList";
import PlayerInfo from "./components/PlayerInfo";
import PlayerList from "./components/PlayerList";
import { Player, Tier } from "./common";

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

var ranks = 5;

function App() {
  const [tiers, setTiers] = useState<Tier[]>(initialTiers);
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>({} as Player);

  const addTier = () => {
    ranks += 1;
    setTiers([...tiers, { rank: ranks, players: [] as Player[] }]);
  };

  const removeTier = () => {
    setTiers(tiers.filter((tier) => tier.rank != ranks));
    ranks -= 1;
  };

  return (
    <Box display="flex" flexDirection="row">
      <div>
        <Button onClick={() => addTier()}>Add Tier</Button>
        <Button onClick={() => removeTier()}>Remove Tier</Button>
        <TierList tiers={tiers} />
      </div>
      <div>
        <PlayerInfo player={selectedPlayer} />
        <PlayerList
          onClick={(player: Player) => setSelectedPlayer(player)}
          players={players}
        />
      </div>
    </Box>
  );
}

export default App;
