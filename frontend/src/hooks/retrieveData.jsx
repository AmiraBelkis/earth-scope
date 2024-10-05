import { useEffect, useState } from 'react';

export const retrieveData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                if (!Array.isArray(result)) {
                    throw new Error(`fetching data return something other than list`);
                }
                setData(result.map((item) => ({ value: item.id, label: item.title })));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData(url);
    }, [url]);

    return { data, loading, error };
};

