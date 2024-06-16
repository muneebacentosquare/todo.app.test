import React from "react";
import ProductCategoryRow from "../ProductCategoryRow.jsx";

export default function FilterableProductTable() {
    const products = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple", description: 'description for apple'},
        {
            category: "Fruits",
            price: "$1",
            stocked: true,
            name: "Dragonfruit",
            description: 'description for Dragonfruit'
        },
        {
            category: "Fruits",
            price: "$2",
            stocked: false,
            name: "Passionfruit",
            description: 'description for Passion fruit'
        },
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach", description: 'description for Spinach'},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin", description: 'description for Pumpkin'},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas", description: 'description for Peas'}
    ];

    return (
        <div className="w-full lg:w-9/12 p-5 my-10 mx-auto justify-center rounded shadow">
            <h5>Product table</h5>
            <input type="text"
                   className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                   placeholder="Search..."/>
            <label>
                <input type="checkbox"/>
                <span className="ms-1">Only show products in stock</span>
            </label>
            <table className="my-5 border-collapse border border-slate-500 table-auto">
                <thead>
                <tr>
                    <th className="border border-slate-600 p-1.5">Name</th>
                    <th className="border border-slate-600 p-1.5">Price</th>
                    <th className="border border-slate-600 p-1.5">Description</th>
                </tr>
                </thead>
                <tbody>
                <ProductCategoryRow></ProductCategoryRow>

                </tbody>
            </table>
        </div>
    );
}