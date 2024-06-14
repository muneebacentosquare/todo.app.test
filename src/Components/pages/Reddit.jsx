import React, {useEffect, useState} from "react";

export default function Reddit() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.reddit.com/r/aww.json')
            .then(response => response.json())
            .then(results => {
                setIsLoading(false);
                setPosts(results.data.children)
            })
    }, [])

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
            {posts && (
                <div className="grid grid-cols-4 gap-4">
                    {posts.map(post => (
                        <div className="border broder-gray-200">
                            <img className="w-full" alt="something" src={post.data.thumbnail}/>
                            <div className="p-2">
                                <h6>{post.data.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}