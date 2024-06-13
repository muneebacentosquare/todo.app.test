import React from "react";
import App from "../App.jsx";
import About from "./pages/About.jsx";
import NavigationBar from "./NavigationBar.jsx";

export default function Root() {
    return (
        <>
            <NavigationBar></NavigationBar>
            {/*<App/>*/}
            <About></About>
        </>
    );
}