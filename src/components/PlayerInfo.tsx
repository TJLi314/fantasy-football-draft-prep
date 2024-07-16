import { Box, Text } from "@chakra-ui/react";
import { Player, letToNumRankMap, numToLetRankMap } from "../common";
import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { playerAddedIntoTier } from "../store/tiersSlice";

interface Props {
  player: Player;
}

const PlayerInfo = ({ player }: Props) => {
  const dispatch = useDispatch();
  const rankRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    var rank = -1;
    if (rankRef.current !== null)
      rank = letToNumRankMap.get(rankRef.current.value);
    dispatch(
      playerAddedIntoTier({
        rank: rank,
        player: { name: player.name, rank: rank },
      })
    );
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
