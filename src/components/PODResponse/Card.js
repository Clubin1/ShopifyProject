import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import ModalItem from './ModalItem'
import {
    Box, 
    Heading, 
    Text, 
    Button,
    IconButton
} from '@chakra-ui/react'

const Card = ({ title, date, explanation, url}) => {
    let splicedExplanation = `${explanation.split(' ').slice(0, 15).join(' ')}...`;

    return (
        <Box>
            <Heading>{title}</Heading>
            <Text mt={2} mb={2}>{date}</Text>
            <img src={url}/>
            <Text mt={4}> {splicedExplanation} </Text>
            <IconButton
            variant='outline'
            colorScheme='purple'
            aria-label='Send email'
            icon={<FaRegThumbsUp />}
            />    
            <IconButton
            variant='outline'
            colorScheme='purple'
            aria-label='Send email'
            icon={<FaRegThumbsDown/>}
            />
            <ModalItem title={title} body={explanation}/>
        </Box>
   )
};

export default Card;
