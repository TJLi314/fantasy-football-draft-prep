import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../common";
import PlayerInfo from "../components/PlayerInfo";
import PlayerList from "../components/PlayerList";
import TierList from "../components/TierList";
import { runningbacksLoaded } from "../store/players/runningbacksSlice";
import {
  runningbackTierAdded,
  runningbackTierRemoved,
  runningbackTiersLoaded,
} from "../store/tiers/runningbackTiersSlice";

const initialTiers = [
  {
    rank: 0,
    players: [{ name: "Christian Mccaffrey", rank: 0 }],
  },
  {
    rank: 1,
    players: [
      { name: "Breece Hall", rank: 1 },
      { name: "Bijan Robinson", rank: 1 },
    ],
  },
  { rank: 2, players: [] },
  { rank: 3, players: [] },
  { rank: 4, players: [] },
];

const initialPlayers = [
  { name: "Christian Mccaffrey", rank: 0 },
  { name: "Breece Hall", rank: 1 },
  { name: "Bijan Robinson", rank: 1 },
  { name: "Kyren Williams", rank: -1 },
  { name: "Jahmyr Gibbs", rank: -1 },
  { name: "Isaiah Pacheco", rank: -1 },
  { name: "Travis Etienne", rank: -1 },
  { name: "Rachad White", rank: -1 },
  { name: "Jonathon Taylor", rank: -1 },
  { name: "Saquon Barkley", rank: -1 },
  { name: "Derrick Henry", rank: -1 },
  { name: "Josh Jacobs", rank: -1 },
];

function RunningbacksHome() {
  const dispatch = useDispatch();
  const tiers = useSelector((state: any) => state.tiers.runningbackTiers);
  const players = useSelector((state: any) => state.players.runningbacks);

  useEffect(() => {
    dispatch(runningbackTiersLoaded({ tiers: initialTiers }));
  }, []);

  useEffect(() => {
    dispatch(runningbacksLoaded({ players: initialPlayers }));
  }, []);

  const [selectedPlayer, setSelectedPlayer] = useState<Player>(
    null as unknown as Player
  );

  return (
    <Box>
      <Text fontFamily="sans-serif" fontSize="24px">
        Runningbacks
      </Text>
      <Box display="flex" flexDirection="row">
        <div>
          <Button onClick={() => dispatch(runningbackTierAdded())}>
            Add Tier
          </Button>
          <Button onClick={() => dispatch(runningbackTierRemoved())}>
            Remove Tier
          </Button>
          <TierList tiers={tiers} />
        </div>
        <div>
          {selectedPlayer && (
            <PlayerInfo
              selectedPlayer={selectedPlayer}
              position="runningback"
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

export default RunningbacksHome;
