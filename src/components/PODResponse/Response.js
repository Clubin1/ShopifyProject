import {React, useState, useEffect} from 'react'
import useAxios from './useAxios'
import Card from './Card'
import {Container, Box, Center} from '@chakra-ui/react'
import {Oval} from 'react-loader-spinner'

const Response = () => {
    const [data, setData] = useState([]);
    const {response, loading, error} = useAxios({
        method: 'get',
        url: '',
        headers: JSON.stringify(
            {accept: '*/*'}
        ),
        body: JSON.stringify(
            {
                date: 1,
                explanation: 'description',
                hdurl: 'Sample text',
                media_type: 'image',
                service_version: 'v1',
                title: "Title",
                url: "url"
            }
        )
    });

    useEffect(() => {
        if (response !== null) {
            setData({
                ...response
            });
        }
    }, [response]);

    return (
        <div>
            <Box padding='4' bg='gray.100' maxW='xl'>
                {loading ? (
                    <Center>
                        <Oval height="50px" width="50px" textAlignarialLabel="loading-indicator" color="purple"/>
                    </Center>
                        ) : (
                        <>
                            {error && (
                                <p>{error.message}</p>
                            )}
                            <Card title={data.title} date={data.date} explanation={data.explanation} url={data.url}/>
                        </>
                    )}
            </Box>
        </div>
  
    );
};

export default Response;
