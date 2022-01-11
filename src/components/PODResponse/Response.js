import { React, useState, useEffect } from 'react'
import useAxios from './useAxios'
import Card from './Card'

const Response = () => {
    const { response, loading, error } = useAxios({
        method: 'get',
        url: '',
        headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            date: 1,
            explanation: 'description',
            hdurl: 'Sample text',
            media_type: 'image',
            service_version: 'v1',
            title: "Title",
            url: "url"
        }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData({...response});
        } 
    }, [response]);
    
    return (
        <div>
            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <p>{error.message}</p>
                    )}
                    <div>
                        <Card title={data.title}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Response;