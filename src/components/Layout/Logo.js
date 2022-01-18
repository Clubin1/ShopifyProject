import React from "react";
import { Box, Link} from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Link href="/">
        <Box {...props}>
            <img alt="NASA LOGO" width="80rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"></img>
        </Box>
    </Link>
  );
}