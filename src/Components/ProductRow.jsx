import React from "react";

export default function ProductRow({product}) {
    const name = product.stocked ? product.name : <span style={{color: 'text-red-700'}}>{product.name}</span>

    return (
        <tr>
            <td className="border border-slate-600 p-1.5">{name}</td>
            <td className="border border-slate-600 p-1.5">{product.price}</td>
            <td className="border border-slate-600 p-1.5">{product.description}</td>
        </tr>
    );
}