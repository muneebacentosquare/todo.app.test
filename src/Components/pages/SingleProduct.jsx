import React from "react";

export default function SingleProduct() {
    return (
        <div className="w-full lg:w-9/12 p-5 my-10 mx-auto justify-center rounded shadow">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                    <img alt="Images" height="200px" className="w-full"
                         src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </div>
                <div className="col-span-3">
                    <h6 className="text-base text-violet-800 font-medium">Beauty</h6>
                    <h3 className="font-normal text-xl text-black">Product heading</h3>
                    <div className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 24 24"
                             fill="#ffb638" stroke="#ffb638" strokeWidth="2"
                             strokeLinecap="round"
                             strokeLinejoin="round" className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <h6 className="text-sm">6</h6>
                    </div>
                    <p className="text-base text-red-700"><span className="font-semibold">5 </span>left in stock</p>
                    <h6 className="text-xl font-semibold">
                        $298
                    </h6>
                    <p className="font-normal text-black text-base"><span
                        className='font-semibold'>Description :</span> This is the description of product this is the
                        description of product this is the description of product This is the description of product
                        this is the
                        description of product this is the description of product This is the description of product
                        this is the
                        description of product this is the description of product</p>
                    <p className="font-normal text-black text-base"><span
                        className='font-semibold'>Brand :</span> Essence</p>
                    <h6 className='font-semibold'>Tags :</h6>
                    <div className="flex flex-wrap space-x-3 my-2">
                        <p className="px-2 py-1.5 bg-violet-700 rounded-lg text-white flex items-center">Beauty</p>
                        <p className="px-2 py-1.5 bg-violet-700 rounded-lg text-white">Mascara</p>
                    </div>
                    <button
                        className="mt-2.5 py-1 px-2.5 rounded border border-gray-200 text-gray-800 bg-violet-300 text-base w-full">Add
                        to Cart
                    </button>
                    <h2 className="text-black font-semibold text-lg my-1">More Product Info</h2>
                    <p className="font-normal text-black text-base"><span
                        className='font-semibold'>Description :</span> 2 years warranty</p>
                </div>
            </div>
        </div>
    );
}