import React from 'react'
import {Link} from "react-router-dom";

export default function NavLink() {
    return (
        <div className="adres">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faqs">Faqs</Link>
            <Link to="/support">Support</Link>
        </div>
    )
}
