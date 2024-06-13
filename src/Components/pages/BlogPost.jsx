import React from "react";
import {useParams} from "react-router-dom";

export default function BlogPost() {
    const params = useParams();
    return (
        <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
            <h4>This is a blog post {params.id}</h4>
        </div>
    );
}