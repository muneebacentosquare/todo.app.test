import React from "react";
import App from "../App.jsx";
import '../App.css'
import NavigationBar from "./NavigationBar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import FilterableProductTable from "./pages/FilterableProductTable.jsx";
import Weather from "./Weather.jsx";

export default function Root() {
    return (
        <Router>
            <NavigationBar></NavigationBar>
            <div className="p-2">
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/blog/:id' element={<BlogPost/>}/>
                    <Route path='/weather' element={<Weather/>}/>
                    <Route path='*' element={<NoMatch/>}/>
                </Routes>
            </div>
        </Router>
    );
}