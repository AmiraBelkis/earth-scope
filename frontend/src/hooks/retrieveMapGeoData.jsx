import { useEffect, useState } from 'react';
import { urls } from '../utils/constants'

export const retrieveMapGeoData = (filter) => {
    const url = urls.goeData;
    const [goeData, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async (url) => {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: 'Post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(filter)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData(url);
    }, [filter]);


    return [goeData, loading, error];
};

