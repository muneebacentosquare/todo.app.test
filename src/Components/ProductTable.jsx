import React from "react";
import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

export default function ProductTable({products}) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    })

    return (
        <table className="my-5 border-collapse border border-slate-500 table-auto">
            <thead>
            <tr>
                <th className="border border-slate-600 p-1.5">Name</th>
                <th className="border border-slate-600 p-1.5">Price</th>
                <th className="border border-slate-600 p-1.5">Description</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}