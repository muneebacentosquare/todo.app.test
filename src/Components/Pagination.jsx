import React from "react";

export default function Pagination({totalItems, itemsPerPage, setCurrentPage, currentPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-end space-x-2 mt-2">
            {pageNumbers.map((pageNumber) => (
                <button onClick={() => setCurrentPage(pageNumber)}
                        className={`py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ${currentPage === pageNumber ? 'text-white bg-black' : ''}`}>{pageNumber}</button>
            ))}
        </div>
    );
}