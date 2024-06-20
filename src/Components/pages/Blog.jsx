import React, {useEffect, useState} from "react";
import Reddit from "./Reddit.jsx";

export default function Blog() {
    const [isRedditVisible, setRedditVisible] = useState(false);

    useEffect(() => {
        setRedditVisible((prevIsRedditVisible) => !isRedditVisible)
    }, [])

    return (
        <div className="w-full lg:w-9/12 p-5 my-10 mx-auto justify-center rounded shadow">
            {isRedditVisible && (
                <Reddit/>
            )}
        </div>
    );
}