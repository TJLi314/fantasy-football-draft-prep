import { Box, Text } from "@chakra-ui/react";
import { Tier, TierColor, numToLetRankMap } from "../common";

interface Props {
  tier: Tier;
}

const IndividualTier = ({ tier }: Props) => {
  const { letter, color } = numToLetRankMap.get(tier.rank) as TierColor;

  return (
    <Box display="flex" flexDirection="row">
      <Box
        bg={color}
        width="100px"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="36"
      >
        {letter}
      </Box>
      <Box bg="black" width="600px" h="100px" display="flex">
        {tier.players.map((player) => (
          <Box
            h="25px"
            width="100px"
            margin="5px"
            bg="#66FF33"
            textAlign="center"
          >
            {player.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IndividualTier;
