import React, {useEffect, useState} from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setErrorMessage('Something went wrong');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, isLoading, errorMessage};
}

export default useFetch;