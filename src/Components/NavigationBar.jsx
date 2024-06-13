import React from "react";

export default function NavigationBar(){
    return (
        <nav className="flex justify-between mx-6">
            <h4>Todo App</h4>
            <ul>
                <li>
                    <a href="#">
                        Home
                    </a>
                    <a href="#">
                        About
                    </a>
                    <a href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}