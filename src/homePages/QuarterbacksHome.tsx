import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../common";
import PlayerInfo from "../components/PlayerInfo";
import PlayerList from "../components/PlayerList";
import TierList from "../components/TierList";
import { quarterbacksLoaded } from "../store/players/quarterbacksSlice";
import {
  quarterbackTierAdded,
  quarterbackTierRemoved,
  quarterbackTiersLoaded,
} from "../store/tiers/quarterbackTiersSlice";

const initialTiers = [
  {
    rank: 0,
    players: [{ name: "Josh Allen", rank: 0 }],
  },
  {
    rank: 1,
    players: [
      { name: "Jalen Hurts", rank: 1 },
      { name: "Patrick Mahome", rank: 1 },
    ],
  },
  { rank: 2, players: [] },
  { rank: 3, players: [] },
  { rank: 4, players: [] },
];

const initialPlayers = [
  { name: "Josh Allen", rank: 0 },
  { name: "Jalen Hurts", rank: 1 },
  { name: "Patrick Mahomes", rank: 1 },
  { name: "Lamar Jackson", rank: -1 },
  { name: "CJ Stroud", rank: -1 },
  { name: "Anthony Richardson", rank: -1 },
  { name: "Kyler Murray", rank: -1 },
  { name: "Jordan Love", rank: -1 },
  { name: "Joe Burrow", rank: -1 },
  { name: "Dak Prescott", rank: -1 },
  { name: "Brock Purdy", rank: -1 },
  { name: "Justin Herbert", rank: -1 },
];

function QuarterbacksHome() {
  const dispatch = useDispatch();
  const tiers = useSelector((state: any) => state.tiers.quarterbackTiers);
  const players = useSelector((state: any) => state.players.quarterbacks);

  useEffect(() => {
    dispatch(quarterbackTiersLoaded({ tiers: initialTiers }));
  }, []);

  useEffect(() => {
    dispatch(quarterbacksLoaded({ players: initialPlayers }));
  }, []);

  const [selectedPlayer, setSelectedPlayer] = useState<Player>(
    null as unknown as Player
  );

  return (
    <Box>
      <Text fontFamily="sans-serif" fontSize="24px">
        Quarterbacks
      </Text>
      <Box display="flex" flexDirection="row">
        <div>
          <Button onClick={() => dispatch(quarterbackTierAdded())}>
            Add Tier
          </Button>
          <Button onClick={() => dispatch(quarterbackTierRemoved())}>
            Remove Tier
          </Button>
          <TierList tiers={tiers} />
        </div>
        <div>
          {selectedPlayer && (
            <PlayerInfo
              selectedPlayer={selectedPlayer}
              position="quarterback"
            />
          )}
          <PlayerList
            onClick={(player: Player) => setSelectedPlayer(player)}
            players={players}
          />
        </div>
      </Box>
    </Box>
  );
}

export default QuarterbacksHome;
