import React, {useState} from "react";

export default function QuoteGenerator() {
    const [quote, setQuote] = useState({text: '', author: ''});
    const [isLoading, setIsLoading] = useState(false);

    const fetchQuote = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote({text: data.content, author: data.author});
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <button onClick={fetchQuote}>Generate a quote</button>
            {isLoading ? (
                <p>Loading quote</p>
            ) : (
                <>
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </>
            )}
        </div>
    );
}