import React, {useContext , useState} from "react";
import useToggle from "../hooks/useToggle.js";
import {ProductContext} from "../context/ProductContext.js";

export default function Cart({cartItems}) {
    const [isCartClose, setIsCartClose] = useToggle(true);

    const product = useContext(ProductContext);
    const handleIncrement = (itemId) => {
        setCartItems(updatedCartItems);
    };

    const handleDecrement = (itemId) => {
        setCartItems(updatedCartItems);
    };


    return (
        <>
            {isCartClose && (
                <>
                    <div className="absolute bg-black/50 inset-0"></div>
                    <div className="fixed inset-y-0 right-0 w-96 h-screen bg-violet-50 p-4 overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-black mb-4">Cart (1)</h2>
                            <button onClick={() => setIsCartClose((prevIsCartClose) => !prevIsCartClose)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-x">
                                    <path d="M18 6 6 18"/>
                                    <path d="m6 6 12 12"/>
                                </svg>
                            </button>
                        </div>
                        {cartItems && (
                            <>
                                {cartItems.map(cartItem => (
                                    <div key={cartItem.id} className="flex space-x-3">
                                        <img alt="Images" className="w-24 h-24 object-center shadow-md"
                                             src={cartItem.thumbnail}/>
                                        <div className="w-full">
                                            <h5 className="text-black font-semibold text-base">{cartItem.title}</h5>
                                            <p className="text-gray-500 font-normal text-base">{cartItem.brand} | {cartItem.category}</p>
                                            <h6 className="text-xl font-semibold">
                                                {cartItem.price}
                                            </h6>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-1">
                                                    <button onClick={() => handleDecrement(cartItem.id)}
                                                            className="py-0.5 px-2.5 rounded border border-gray-300 text-gray-600 text-lg">-
                                                    </button>
                                                    <span className="px-2 text-base">{cartItem.quantity}</span>
                                                    <button onClick={() => handleIncrement(cartItem.id)}
                                                            className="py-0.5 px-2.5 rounded border border-gray-300 text-gray-600 text-lg">+
                                                    </button>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" strokeWidth="2"
                                                     strokeLinecap="round"
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
                                ))}
                            </>
                        )}

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
            )}
        </>
    );
}