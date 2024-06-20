import React from "react";
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="mx-6 my-2 p-2 bg-violet-300">
            <ul className="flex space-x-2 justify-center items-center">
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
                    } to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) =>
                        isActive ? "font-bold" : ""
                    } to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) =>
                        isActive ? "font-bold" : ""
                    } to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) =>
                        isActive ? "font-bold" : ""
                    } to="/weather">
                        Weather
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}