import React, { Component } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-img">
                <Link to="/"><img src="resume.png" alt=""/></Link>
            </div>
            <div className="header-links">
                <ul id="list-links">
                    <li><Link to="/templates">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register"><button className="btn">Register</button></Link></li>
                    <li><Link to="/signIn"><button className="btn-in">Sign In</button></Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Header;