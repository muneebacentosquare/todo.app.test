import React from "react";

export default function SingleProduct() {
    return (
        <>
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
                            className='font-semibold'>Description :</span> This is the description of product this is
                            the
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
                            className='font-semibold'>Warranty Information :</span> 2 years warranty</p>
                        <p className="font-normal text-black text-base"><span
                            className='font-semibold'>Shipping Information :</span> 2 years warranty</p>
                        <p className="font-normal text-black text-base"><span
                            className='font-semibold'>Availability Status :</span> 2 years warranty</p>
                        <p className="font-normal text-black text-base"><span
                            className='font-semibold'>Return Policy :</span> 2 years warranty</p>
                        <p className="font-normal text-black text-base"><span
                            className='font-semibold'>Minimum Order Quantity :</span> 2 years warranty</p>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold text-black mb-2">Reviews</h2>
                    <div className="py-2">
                        <div className="flex space-x-2">
                            <img alt="Images" className="w-10 h-10 object-center rounded-full"
                                 src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h5 className="text-black font-semibold text-base">Scarlett Wright</h5>
                                    <p className="text-gray-400 font-medium text-sm">2 days ago</p>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                         viewBox="0 0 24 24"
                                         fill="#ffb638" stroke="#ffb638" strokeWidth="2"
                                         strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                    <h6 className="text-sm">6 star rating</h6>
                                </div>
                                <p className="text-gray-700 font-normal text-base mt-1.5">Very Satisfied description of
                                    product this is the description of product This is the description of product this
                                    is
                                    the description of product this is the description of product</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex space-x-2">
                            <img alt="Images" className="w-10 h-10 object-center rounded-full"
                                 src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h5 className="text-black font-semibold text-base">Scarlett Wright</h5>
                                    <p className="text-gray-400 font-medium text-sm">2 days ago</p>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                         viewBox="0 0 24 24"
                                         fill="#ffb638" stroke="#ffb638" strokeWidth="2"
                                         strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                    <h6 className="text-sm">6 star rating</h6>
                                </div>
                                <p className="text-gray-700 font-normal text-base mt-1.5">Very Satisfied description of
                                    product this is the description of product This is the description of product this
                                    is
                                    the description of product this is the description of product</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex space-x-2">
                            <img alt="Images" className="w-10 h-10 object-center rounded-full"
                                 src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h5 className="text-black font-semibold text-base">Scarlett Wright</h5>
                                    <p className="text-gray-400 font-medium text-sm">2 days ago</p>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                         viewBox="0 0 24 24"
                                         fill="#ffb638" stroke="#ffb638" strokeWidth="2"
                                         strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                    <h6 className="text-sm">6 star rating</h6>
                                </div>
                                <p className="text-gray-700 font-normal text-base mt-1.5">Very Satisfied description of
                                    product this is the description of product This is the description of product this
                                    is
                                    the description of product this is the description of product</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex space-x-2">
                            <img alt="Images" className="w-10 h-10 object-center rounded-full"
                                 src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h5 className="text-black font-semibold text-base">Scarlett Wright</h5>
                                    <p className="text-gray-400 font-medium text-sm">2 days ago</p>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                         viewBox="0 0 24 24"
                                         fill="#ffb638" stroke="#ffb638" strokeWidth="2"
                                         strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                    <h6 className="text-sm">6 star rating</h6>
                                </div>
                                <p className="text-gray-700 font-normal text-base mt-1.5">Very Satisfied description of
                                    product this is the description of product This is the description of product this
                                    is
                                    the description of product this is the description of product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-y-0 right-0 w-96 h-screen bg-violet-50 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-black mb-4">Cart (1)</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-x">
                        <path d="M18 6 6 18"/>
                        <path d="m6 6 12 12"/>
                    </svg>
                </div>
                <div className="flex space-x-3">
                    <img alt="Images" className="w-24 h-24 object-center"
                         src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    <div className="w-full">
                        <h5 className="text-black font-semibold text-base">Product Heading</h5>
                        <p className="text-gray-500 font-normal text-base">Essence | Beauty</p>
                        <h6 className="text-xl font-semibold">
                            $298
                        </h6>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <button
                                    className="py-0.5 px-2.5 rounded border border-gray-300 text-gray-600 text-lg">-
                                </button>
                                <span className="px-2 text-base">1</span>
                                <button
                                    className="py-0.5 px-2.5 rounded border border-gray-300 text-gray-600 text-lg">+
                                </button>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-trash-2">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <line x1="10" x2="10" y1="11" y2="17"/>
                                <line x1="14" x2="14" y1="11" y2="17"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 w-96 right-0 bg-violet-100 p-4">
                    <div className="flex justify-between items-center">
                        <p className="text-black font-normal text-base">Subtotal (1 item)</p>
                        <p className="text-black font-normal text-base">$ 3,400</p>
                    </div>
                    <button
                        className="mt-2.5 p-2.5 rounded border border-gray-200 text-gray-800 bg-violet-300 text-base w-full">Checkout
                    </button>
                </div>
            </div>
        </>
    );
}