import React from "react";
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="mx-6 my-2 p-2 bg-violet-300">
            <ul className="flex space-x-4 justify-center items-center">
                <li>
                    <NavLink className={({isActive}) =>
                        isActive ? "font-bold" : ""
                    } to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) =>
                        isActive ? "font-bold" : ""
                    } to="/github-issues">
                        Github Issues
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}