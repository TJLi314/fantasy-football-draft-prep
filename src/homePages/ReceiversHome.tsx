import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../common";
import PlayerInfo from "../components/PlayerInfo";
import PlayerList from "../components/PlayerList";
import TierList from "../components/TierList";
import { receiversLoaded } from "../store/players/receiversSlice";
import {
  receiverTierAdded,
  receiverTierRemoved,
  receiverTiersLoaded,
} from "../store/tiers/receiverTiersSlice";

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

function ReceiversHome() {
  const dispatch = useDispatch();
  const tiers = useSelector((state: any) => state.tiers.receiverTiers);
  const players = useSelector((state: any) => state.players.receivers);

  useEffect(() => {
    dispatch(receiverTiersLoaded({ tiers: initialTiers }));
  }, []);

  useEffect(() => {
    dispatch(receiversLoaded({ players: initialPlayers }));
  }, []);

  const [selectedPlayer, setSelectedPlayer] = useState<Player>(
    null as unknown as Player
  );

  return (
    <Box>
      <Text fontFamily="sans-serif" fontSize="24px">
        Receivers
      </Text>
      <Box display="flex" flexDirection="row">
        <div>
          <Button onClick={() => dispatch(receiverTierAdded())}>
            Add Tier
          </Button>
          <Button onClick={() => dispatch(receiverTierRemoved())}>
            Remove Tier
          </Button>
          <TierList tiers={tiers} />
        </div>
        <div>
          {selectedPlayer && (
            <PlayerInfo selectedPlayer={selectedPlayer} position="receiver" />
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

export default ReceiversHome;
