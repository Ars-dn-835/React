import React from "react";
import Menu from './Menu';
import './header.css';


function Header() {
    return (
        <header className="header">
            <Menu/>
            <div>
                <div className="podcast">
                    <img className="podcast_images_img" src={require("../images/header_1.png")} alt="#"/>
                    <div className="podcast_images">
                        <h1>Take your podcast to the <span className="podcast_images_h1_1">next</span> <span
                            className="podcast_images_h1_2"> level</span></h1>
                        <p>Listen on</p>
                        <a href="/"><img src={require("../images/header_level_1.png")} alt="#"/></a>
                        <a href="/"><img src={require("../images/header_level_2.png")} alt="#"/></a>
                        <a href="/"><img src={require("../images/header_level_3.png")} alt="#"/></a>
                        <a href="/"><img src={require("../images/header_level_4.png")} alt="#"/></a>
                        <a href="/"><img src={require("../images/header_level_5.png")} alt="#"/></a>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
