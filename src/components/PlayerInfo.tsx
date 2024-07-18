import { Box, Text } from "@chakra-ui/react";
import { Player, letToNumRankMap, numToLetRankMap } from "../common";
import { FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeReceiverRank } from "../store/players/receiversSlice";
import { changeQuarterbackRank } from "../store/players/quarterbacksSlice";
import { changeRunningbackRank } from "../store/players/runningbacksSlice";
import { changeTightendRank } from "../store/players/tightendsSlice";
import { playerAddedIntoQuarterbackTier } from "../store/tiers/quarterbackTiersSlice";
import { playerAddedIntoRunningbackTier } from "../store/tiers/runningbackTiersSlice";
import { playerAddedIntoTightendTier } from "../store/tiers/tightendTiersSlice";
import { playerAddedIntoReceiverTier } from "../store/tiers/receiverTiersSlice";

interface Props {
  selectedPlayer: Player;
  position: string;
}

const PlayerInfo = ({ selectedPlayer, position }: Props) => {
  let player = {} as Player;
  switch (position) {
    case "receiver":
      player = useSelector((state: any) =>
        state.players.receivers.find(
          (player: Player) => player.name == selectedPlayer.name
        )
      );
      break;
    case "runningback":
      player = useSelector((state: any) =>
        state.players.runningbacks.find(
          (player: Player) => player.name == selectedPlayer.name
        )
      );
      break;
    case "tightend":
      player = useSelector((state: any) =>
        state.players.tightends.find(
          (player: Player) => player.name == selectedPlayer.name
        )
      );
      break;
    case "quarterback":
      player = useSelector((state: any) =>
        state.players.quarterbacks.find(
          (player: Player) => player.name == selectedPlayer.name
        )
      );
      break;
  }

  const dispatch = useDispatch();
  const rankRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    var rank = -1;
    if (rankRef.current !== null)
      rank = letToNumRankMap.get(rankRef.current.value);

    switch (position) {
      case "receiver":
        dispatch(
          playerAddedIntoReceiverTier({
            rank: rank,
            player: player,
          })
        );
        dispatch(changeReceiverRank({ name: player.name, rank: rank }));
        break;
      case "runningback":
        dispatch(
          playerAddedIntoRunningbackTier({
            rank: rank,
            player: player,
          })
        );
        dispatch(changeRunningbackRank({ name: player.name, rank: rank }));
        break;
      case "tightend":
        dispatch(
          playerAddedIntoTightendTier({
            rank: rank,
            player: player,
          })
        );
        dispatch(changeTightendRank({ name: player.name, rank: rank }));
        break;
      case "quarterback":
        dispatch(
          playerAddedIntoQuarterbackTier({
            rank: rank,
            player: player,
          })
        );
        dispatch(changeQuarterbackRank({ name: player.name, rank: rank }));
        break;
    }
  };

  return (
    <Box bg="orange" width="400px" h="300px">
      <Text textAlign="center" fontSize="24">
        Player Info
      </Text>
      <Text textAlign="center" fontSize="24">
        {player.name}
      </Text>
      {player.name && (
        <Box width="400px" display="flex" justifyContent="center">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="rank"
              style={{ fontSize: "24px", marginRight: "5px" }}
            >
              Rank
            </label>
            <input
              id="rank"
              ref={rankRef}
              type="text"
              placeholder={numToLetRankMap.get(player.rank)?.letter}
              style={{
                width: "40px",
                height: "40px",
                textAlign: "center",
                fontSize: "24px",
              }}
            />
            <button style={{ marginLeft: "5px" }}>Submit</button>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default PlayerInfo;
