import React, {useState} from "react";
import {Link} from "react-router-dom";
import Reddit from "./Reddit.jsx";
import Joke from "./Joke.jsx";

export default function Blog() {
    const [isRedditVisible, setRedditVisible] = useState(false);
    const [isJokeVisible, setJokeVisible] = useState(false);

    return (
        <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
            <button onClick={() => setRedditVisible((prevRedditVisible) => !isRedditVisible)}
                    className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Reddit Button
            </button>
            <button onClick={() => setJokeVisible(prevJokeVisible => !isJokeVisible)}
                    className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Joke Button
            </button>
            {isRedditVisible && (
                <Reddit/>
            )}
            {isJokeVisible && (
                <Joke/>
            )
            }
            <ul>
                <li>
                    <Link to="/blog/1">Post One</Link>
                </li>
                <li>
                    <Link to="/blog/2">Post Two</Link>
                </li>
            </ul>
        </div>
    );
}