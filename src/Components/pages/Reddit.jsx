import React from "react";
import useFetch from "../../hooks/useFetch.js";

export default function Reddit() {
    const {data: posts, isLoading, errorMessage} = useFetch('https://www.reddit.com/r/aww.json');

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
                    {posts.data.children.map(post => (
                        <div key={post.data.id} className="border broder-gray-200">
                            <img className="w-full" alt={post.data.title || 'Reddit post'}
                                 src={post.data.thumbnail}/>
                            <div className="p-2">
                                <h6 className="text-sm font-medium text-gray-700 leading-tight tracking-normal">{post.data.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {errorMessage && (
                <div>{errorMessage}</div>
            )}
        </>
    );
}