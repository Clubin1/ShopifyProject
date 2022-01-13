import {React} from 'react'
import Response from '../../components/PODResponse/Response'
import Landing from '../../components/UI/Landing'

import {Heading, Container} from '@chakra-ui/react'
const PODPage = () => {

    return (
        <>
            <Landing title="NASA API Picture Of The Day Showcase" 
                info="A showcase of the daily picture the NASA API responds with.
                The responses changes daily, come back tomorrow to learn something new!"/>
            <Container maxW="xl" >
                <Response/>
            </Container>
        </>
    )
}

export default PODPage;
