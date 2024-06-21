import React, {useEffect, useState} from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError('Something went wrong');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;