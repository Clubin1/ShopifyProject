import { React, useState, useEffect, useRef } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import ModalItem from './ModalItem';
import Heart from "react-animated-heart";

import {
    Box, 
    Heading, 
    Text, 
    HStack,
    VStack,
    Button,
    IconButton
} from '@chakra-ui/react';


const Card = ({ title, date, explanation, url}) => {
    let localNum = parseInt(localStorage.getItem('postLikes'));
    let [likeNum, setLikes] = useState(localNum ? localNum : 10);
    const [isClick, setClick] = useState(false);

    const likePost = () => {
        if (isClick === false) {
            setLikes(likeNum += 1);
            setClick(!isClick)
            localStorage.setItem('postLikes', likeNum);
        } else {
            setLikes(likeNum -= 1);
            setClick(!isClick)
            localStorage.setItem('postLikes', likeNum);
        }
    }
    let splicedExplanation = `${explanation.split(' ').slice(0, 30).join(' ')}...`;
    return (
        <Box pt={7} pb={7}>
            <VStack spacing={4} align='left'>
               <Heading>{title}</Heading>
                <Text>{date}</Text>
                <img src={url}/>
                <Heart isClick={isClick} onClick={() => likePost()} />
                <Text>{likeNum} likes</Text>
                <Text> {splicedExplanation} </Text>
                <HStack>
                    <ModalItem title={title} body={explanation}/>
                </HStack>
            </VStack>
        </Box>
   );
};

export default Card;
