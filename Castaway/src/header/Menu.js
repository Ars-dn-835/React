import React from "react";
import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <div className="menu_logo">
                <a href="/"><img src={require("../images/menu_logo.png")} alt="#" /></a>
            </div>
            <nav className="menu_nav">
                <a href="/">Home</a>
                <a href="/">Episodes</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </nav>
        </div>
    );
}

export default Menu;
