import { Box, Button, Text } from "@chakra-ui/react";
import { Player } from "../common";

interface Props {
  onClick: (player: Player) => void;
  players: Player[];
}

const PlayerList = ({ onClick, players }: Props) => {
  // const players = useSelector((state: any) => state.players) as Player[];

  return (
    <Box bg="#66CCFF" width="400px" h="500px" overflow="scroll">
      <Text textAlign="center" fontSize="24">
        Player List
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        width="400px"
      >
        {players.map((player) => {
          return (
            <Box
              width="350px"
              h="25px"
              display="flex"
              justifyContent="space-evenly"
              flexDirection="row"
              marginBottom="5px"
              bg="#66FF33"
            >
              {player.name}
              <Button onClick={() => onClick(player)}>select</Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PlayerList;
