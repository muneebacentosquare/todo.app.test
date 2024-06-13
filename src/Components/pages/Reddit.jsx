import React, {useEffect, useState} from "react";

export default function Reddit() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://www.reddit.com/r/aww.json')
            .then(response => response.json())
            .then(results => {
                console.log(results.data.children);
                setPosts(results.data.children)
            })
    }, [])
    return (
        <div>
            <h4>Reddit here</h4>
            {posts && (
                <ul>
                    {posts.map(post => (
                        <li key={post.data.id}>
                            <img src={post.data.thumbnail}/>
                            <a href={`https://www.reddit.com${post.data.permalink}`}>
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}