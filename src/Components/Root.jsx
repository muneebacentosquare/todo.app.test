import React from "react";
import App from "../App.jsx";
import '../App.css'
import NavigationBar from "./NavigationBar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GithubIssue from "./pages/GithubIssue.jsx";

export default function Root() {
    return (
        <Router>
            <NavigationBar></NavigationBar>
            <div className="p-2">
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/github-issues' element={<GithubIssue/>}/>
                </Routes>
            </div>
        </Router>
    );
}