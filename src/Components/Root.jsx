import React from "react";
import App from "../App.jsx";
import NavigationBar from "./NavigationBar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function Root() {
    return (
        <Router>
            <NavigationBar></NavigationBar>
            <div className="p-2 bg-blue-100">
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}