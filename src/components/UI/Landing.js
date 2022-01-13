import { React } from 'react'
import { 
    Heading, 
    Center, 
    Container, 
    HStack, 
    VStack, 
    Text, 
    Button,
    Stack
} from '@chakra-ui/react'

const Landing = ({title, info}) => {

    const BGgradient = "linear-gradient(-135deg,rgb(0,42,135) 25%,rgb(147,64,255) 100%)"
    const logoURL = "https://www.freepnglogos.com/uploads/rocket-png/space-rocket-clipart-transparent-png-svg-vector-28.png"

    return(
        <Center bg={BGgradient}
            h="80vh">
            <Container maxW="4xl">
                <HStack spacing={2}>
                    <VStack spacing={3}>
                        <Heading color="white.100">{title}</Heading>
                        <Text color="white.100">{info}</Text>
                    </VStack>
                    <img height="200px" width="200px" src={logoURL}></img>
                </HStack>
            </Container>
        </Center>
    )
}

export default Landing;