import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Button, ButtonGroup} from '@chakra-ui/react'
import { FaRegThumbsUp } from 'react-icons/fa'
const Card = ({ title, date, explanation, url}) => {
   return (
        <Box>
            <Heading>{title}</Heading>
            <Text mt={2} mb={2}>{date}</Text>
            <img src={url}/>
            <Text mt={4}> {explanation}</Text>
            <Button mt={4} colorScheme='purple' variant='link'>
                Like
            </Button>
            <FaRegThumbsUp/>
        </Box>
   )
};

export default Card;
