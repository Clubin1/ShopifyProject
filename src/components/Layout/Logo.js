import React from "react";
import { Box, Text, Link} from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Link href="/">
        <Box {...props}>
            <img width="80rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"></img>
        </Box>
    </Link>
  );
}