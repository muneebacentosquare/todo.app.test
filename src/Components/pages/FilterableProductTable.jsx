import React from "react";
import ProductTable from "../ProductTable.jsx";
import SearchBar from "../SearchBar.jsx";

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
            <SearchBar/>
            <ProductTable products={products} />
        </div>
    );
}