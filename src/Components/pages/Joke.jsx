import React, {useEffect, useState} from "react";

export default function Joke() {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(result => {
                setIsLoading(false);
                setJoke(result.setup + ' ' + result.punchline);
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage('Something went wrong');
            })
    }, []);

    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center h-96">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-loader-circle animate-spin">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                </div>
            )}
            {joke && (
                <p className="text-base text-black font-medium">
                    {joke}
                </p>
            )}
            {errorMessage && (
                <div>{errorMessage}</div>
            )}
        </>
    );
}