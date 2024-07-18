import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      width="100%"
      bg="orange"
      height="70px"
      display="flex"
      justifyContent="space-around"
      alignContent="center"
    >
      <Box bg="#66FF33" width="200px" height="50px" textAlign="center">
        <Link to="/">Home</Link>
      </Box>
      <Box bg="skyblue" width="200px" height="50px" textAlign="center">
        <Link to="/receivers">Wide Receivers</Link>
      </Box>
      <Box bg="pink" width="200px" height="50px" textAlign="center">
        <Link to="/runningbacks">Runningbacks</Link>
      </Box>
      <Box bg="yellow" width="200px" height="50px" textAlign="center">
        <Link to="/quarterbacks">Quarterbacks</Link>
      </Box>
      <Box bg="red" width="200px" height="50px" textAlign="center">
        <Link to="/tightends">Tightends</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
