import {React, useState, useEffect} from 'react'
import useAxios from './useAxios'
import Card from './Card'
import {Container, Box} from '@chakra-ui/react'

const Response = () => {
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
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData({
                ...response
            });
        }
    }, [response]);

    return (
        <Box padding='4' bg='gray.100' maxW='xl'>
            <Card title={data.title} date={data.date} explanation={data.explanation} url={data.url}/>
        </Box>
    );
};

export default Response;
