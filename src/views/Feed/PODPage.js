import {React} from 'react'
import Response from '../../components/PODResponse/Response'
import {Heading, Container} from '@chakra-ui/react'
const PODPage = () => {

    return (
        <>
            <Container maxW="xl" >
                <Heading size="xl">Welcome to Apollo</Heading>
                <Response/>
            </Container>
        </>
    )
}

export default PODPage;
