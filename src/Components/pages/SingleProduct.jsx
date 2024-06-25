import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import Rating from "../Rating.jsx";
import {useState} from "react";
import {ProductContext} from "../../context/ProductContext.js";
import Cart from "../Cart.jsx";

export default function product() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const params = useParams();
    const {data: product, isLoading, errorMessage} = useFetch(`https://dummyjson.com/products/${params.id}`);
    const [cartItems, setCartItems] = useState([]);

    function handleAddToCartBtn(product) {
        setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
        const updatedCartItems = updateCartItems(cartItems, product);
        setCartItems(updatedCartItems);
    }

    useEffect(() => {
        if (isCartOpen && product) {
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            existingCartItems.push({...product, quantity: 1});
            setCartItems(existingCartItems);
            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        }
    }, [isCartOpen, product]);


    return (
        <ProductContext.Provider value={product}>
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
                {product && (
                    <>
                        <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-2">
                                <img alt="Images" height="200px" className="w-full shadow-md"
                                     src={product.thumbnail}/>
                            </div>
                            <div className="col-span-3">
                                <h6 className="text-base text-violet-800 font-medium">{product.category}</h6>
                                <h3 className="font-normal text-xl text-black">{product.title}</h3>
                                <Rating stars={product.rating} reviews={product.reviews.length} text="reviews"/>
                                <p className="text-base text-red-700"><span
                                    className="font-semibold">{product.stock} </span>left in
                                    stock</p>
                                <h6 className="text-xl font-semibold">
                                    {product.price}
                                </h6>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Description :</span> {product.description}</p>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Brand :</span> {product.brand}</p>
                                <h6 className='font-semibold'>Tags :</h6>
                                <div className="flex flex-wrap space-x-3 my-2">
                                    {product.tags.map((tag) => (
                                        <p className="px-2 py-1.5 bg-violet-700 rounded-lg text-white flex items-center">{tag}</p>
                                    ))}
                                </div>
                                <button onClick={handleAddToCartBtn}
                                        className="mt-2.5 py-1 px-2.5 rounded border border-gray-200 text-gray-800 bg-violet-300 text-base w-full">Add
                                    to Cart
                                </button>
                                <h2 className="text-black font-semibold text-lg my-1">More Product Info</h2>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Warranty Information :</span> {product.warrantyInformation}
                                </p>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Shipping Information :</span> {product.shippingInformation}
                                </p>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Availability Status :</span> {product.availabilityStatus}
                                </p>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Return Policy :</span> {product.returnPolicy}</p>
                                <p className="font-normal text-black text-base"><span
                                    className='font-semibold'>Minimum Order Quantity :</span> {product.minimumOrderQuantity}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-black mb-2">Reviews</h2>
                            {product.reviews.map((review) => (
                                <div className="py-2 ">
                                    <div className="flex space-x-2">
                                        <img alt="Images" className="w-10 h-10 object-center rounded-full"
                                             src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                                        <div className="w-full">
                                            <div className="flex justify-between items-center">
                                                <h5 className="text-black font-semibold text-base">{review.reviewerName}</h5>
                                                <p className="text-gray-400 font-medium text-sm">2 days ago</p>
                                            </div>
                                            <Rating stars={review.rating}/>
                                            <p className="text-gray-700 font-normal text-base mt-1.5">{review.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {errorMessage && (
                            <div>{errorMessage}</div>
                        )}
                    </>
                )}
            </div>
            {isCartOpen && (
                <Cart cartItems={cartItems}/>
            )}
        </ProductContext.Provider>
    );
}