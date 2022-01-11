// useAxios hook

import { useState, useEffect } from 'react';
import axios from 'axios';
import {REACT_API_KEY} from '../../Keys/apikeys'

axios.defaults.baseURL = `https://api.nasa.gov/planetary/apod?api_key=hhKrv9b7gw0mKT9aIVXdPWlDsaa9wUtEBlJ70IES`;

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};

export default useAxios;
