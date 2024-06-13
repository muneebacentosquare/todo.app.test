import React from "react";
import {Link} from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="mx-6 my-2 p-2 bg-gray-400">
            <ul className="flex space-x-2 justify-center items-center">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>

            </ul>
        </nav>
    );
}