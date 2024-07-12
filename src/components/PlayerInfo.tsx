import { Box, Text } from "@chakra-ui/react";
import { Player, rankMap } from "../common";

interface Props {
  player: Player;
}

const PlayerInfo = ({ player }: Props) => {
  return (
    <Box bg="orange" width="400px" h="300px">
      <Text textAlign="center" fontSize="24">
        Player Info
      </Text>
      <Text textAlign="center" fontSize="24">
        {player.name}
      </Text>
      <Text textAlign="center" fontSize="24">
        Selected Rank: {rankMap.get(player.rank)?.letter}
      </Text>
    </Box>
  );
};

export default PlayerInfo;
