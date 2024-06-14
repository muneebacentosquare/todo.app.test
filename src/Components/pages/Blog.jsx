import React, {useState} from "react";
import Reddit from "./Reddit.jsx";
import Joke from "./Joke.jsx";

export default function Blog() {
    const [isRedditVisible, setRedditVisible] = useState(false);
    const [isJokeVisible, setJokeVisible] = useState(false);

    return (
        <div className="w-full lg:w-9/12 p-5 my-10 mx-auto justify-center rounded shadow">
            <div className="flex space-x-4 mb-6">
                <button onClick={() => setRedditVisible((prevRedditVisible) => !isRedditVisible)}
                        className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Reddit Button
                </button>
                <button onClick={() => setJokeVisible((prevJokeVisible) => !isJokeVisible)}
                        className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Joke Button
                </button>
            </div>
            {isRedditVisible && (
                <Reddit/>
            )}
            {isJokeVisible && (
                <Joke/>
            )
            }
        </div>
    );
}