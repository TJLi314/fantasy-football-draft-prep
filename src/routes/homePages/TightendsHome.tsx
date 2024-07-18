import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../../common";
import PlayerInfo from "../../components/PlayerInfo";
import PlayerList from "../../components/PlayerList";
import TierList from "../../components/TierList";
import { tightendsLoaded } from "../../store/players/tightendsSlice";
import {
  tightendTierAdded,
  tightendTierRemoved,
  tightendTiersLoaded,
} from "../../store/tiers/tightendTiersSlice";

const initialTiers = [
  {
    rank: 0,
    players: [{ name: "Travis Kelce", rank: 0 }],
  },
  {
    rank: 1,
    players: [
      { name: "Mark Andrews", rank: 1 },
      { name: "Sam Laporta", rank: 1 },
    ],
  },
  { rank: 2, players: [] },
  { rank: 3, players: [] },
  { rank: 4, players: [] },
];

const initialPlayers = [
  { name: "Travis Kelce", rank: 0 },
  { name: "Mark Andrews", rank: 1 },
  { name: "Sam Laporta", rank: 1 },
  { name: "Dalton Kincaid", rank: -1 },
  { name: "Trey Mcbride", rank: -1 },
  { name: "George Kittle", rank: -1 },
  { name: "Jake Fergusson", rank: -1 },
  { name: "Dallas Godert", rank: -1 },
  { name: "Pat Friermuth", rank: -1 },
  { name: "Dalton Shultz", rank: -1 },
  { name: "Brock Bowers", rank: -1 },
  { name: "David Njokou", rank: -1 },
];

function TightendsHome() {
  const dispatch = useDispatch();
  const tiers = useSelector((state: any) => state.tiers.tightendTiers);
  const players = useSelector((state: any) => state.players.tightends);

  useEffect(() => {
    dispatch(tightendTiersLoaded({ tiers: initialTiers }));
  }, []);

  useEffect(() => {
    dispatch(tightendsLoaded({ players: initialPlayers }));
  }, []);

  const [selectedPlayer, setSelectedPlayer] = useState<Player>(
    null as unknown as Player
  );

  return (
    <Box>
      <Text fontFamily="sans-serif" fontSize="24px">
        Tightends
      </Text>
      <Box display="flex" flexDirection="row">
        <div>
          <Button onClick={() => dispatch(tightendTierAdded())}>
            Add Tier
          </Button>
          <Button onClick={() => dispatch(tightendTierRemoved())}>
            Remove Tier
          </Button>
          <TierList tiers={tiers} />
        </div>
        <div>
          {selectedPlayer && (
            <PlayerInfo selectedPlayer={selectedPlayer} position="tightend" />
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

export default TightendsHome;
