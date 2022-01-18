import { React, useState } from 'react';
import ModalItem from './ModalItem';
import Heart from "react-animated-heart";

import {
    Box, 
    Heading, 
    Text, 
    HStack,
    VStack
} from '@chakra-ui/react';


const Card = ({ title, date, explanation, url}) => {
    let localNum = parseInt(localStorage.getItem('postLikes'));
    let localLiked = (localStorage.getItem('likedPost') === 'true');
    let [likeNum, setLikes] = useState(localNum ? localNum : Math.floor(Math.random() * (100 - 1) + 1));
    const [isClick, setClick] = useState(localLiked ? localLiked : true);

    const likePost = () => {
        if (isClick === false) {
            setLikes(likeNum += 1);
            setClick(!isClick);
            localStorage.setItem('postLikes', likeNum);
            localStorage.setItem('likedPost', !isClick);
        } else {
            setLikes(likeNum -= 1);
            setClick(!isClick);
            localStorage.setItem('postLikes', likeNum);
            localStorage.setItem('likedPost', !isClick);
        }
    }
    let splicedExplanation = `${explanation.split(' ').slice(0, 30).join(' ')}...`;

    return (
        <Box boxShadow="2xl" pt={7} pb={7}>
            <VStack spacing={4} align='left'>
               <Heading>{title}</Heading>
                <Text>{date}</Text>
                <img alt="Response url" src={url}/>
                <Heart isClick={isClick} onClick={() => likePost()} />
                <Text>{likeNum} likes</Text>
                <Text> {splicedExplanation} </Text>
                <HStack>
                    <ModalItem title={title} body={explanation} url={url}/>
                </HStack>
            </VStack>
        </Box>
   );
};

export default Card;
