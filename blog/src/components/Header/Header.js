import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = props => {
    return (
        <header className = "header">
            <nav className = "headerContents">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/contact-me">Reach out to me!</NavLink>
            </nav>
            <div className = "socMedia">
                <span><a href = "https://www.github.com/san-ya"><FaGithub href = "https://www.github.com/san-ya" /></a></span>
                <span><a href = "https://www.linkedin.com/in/sanya-b-7a99341bb/"><FaLinkedinIn /></a></span>
            </div>
        </header>
    )
}

export default Header;