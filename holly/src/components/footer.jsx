import React from 'react'
import NavLink from "./nav-link";
import Social from "./social";

export default function Footer() {
    return (
        <footer>
            <div className="social">
                <Social/>
            </div>
            <div className="footer">
                <p>© 2018 Holly, all rights reserved</p>
                <NavLink/>
            </div>
        </footer>
    )
}
