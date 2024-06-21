import React from "react";
import useFetch from "../../hooks/useFetch.js";

export default function Product() {
    const {data: items, isLoading, errorMessage} = useFetch('https://dummyjson.com/products');

    return (
        <div className="w-full lg:w-9/12 p-5 my-10 mx-auto justify-center rounded shadow">
            {isLoading && (
                <div className="flex justify-center items-center h-96">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-loader-circle animate-spin">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                </div>
            )}
            {items && (
                <div className="grid grid-cols-3 gap-3">
                    {items.products.map(item => (
                        <div key={item.id} className="border border-gray-200">
                            <img alt="Images" height="200px" className="w-full"
                                 src={item.thumbnail}/>
                            <div className="p-2">
                                <div className="flex justify-between space-x-4">
                                    <h6 className="font-normal text-lg text-black leading-tight">{item.title}</h6>
                                    <h6 className=" text-base font-semibold">
                                        {item.price}
                                    </h6>
                                </div>
                                <p className="font-normal text-black text-sm mt-1 line-clamp-2">{item.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <button
                                        className="py-1 px-2.5 rounded border border-gray-200 text-gray-800 bg-violet-300 text-base ">Add
                                        to Cart
                                    </button>
                                    <div className="flex space-x-1.5">
                                        <h6 className="text-sm">{item.rating}</h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 24 24"
                                             fill="#ffb638" stroke="#ffb638" strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round" className="lucide lucide-star">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}