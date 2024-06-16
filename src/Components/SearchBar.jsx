import React from "react";

export default function SearchBar(){
    return (
        <form>
            <input type="text"
                   className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                   placeholder="Search..."/>
            <label>
                <input type="checkbox"/>
                {' '}
                <span className="ms-1">Only show products in stock</span>
            </label>
        </form>
    );
}