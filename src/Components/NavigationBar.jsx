import React from "react";

export default function NavigationBar() {
    return (
        <nav className="mx-6 my-2 p-2 bg-gray-400">
            <ul className="flex space-x-2 justify-center items-center">
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contact
                    </a>
                </li>

            </ul>
        </nav>
    );
}