/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as APIsURLs from '../config/APIConfig';

export const useFetch = (query) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!query) {
            return;
        }

        const fetchData = async () => {
            const response = await axios({
                method: 'GET',
                url: APIsURLs.default,
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await response.json();
            setData(data);
        };

        fetchData();
    }, [query]);

    return { data };
};

