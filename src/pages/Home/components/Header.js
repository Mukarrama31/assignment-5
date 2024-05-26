/* src/pages/Home/components/Header.js */

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <Link to="/" className="header-logo"></Link>
            <h1>LeMagisin | All Under One Roof!</h1>
            <div className="social-icons">
                <Link to="/not-found" className="social-icon">
                    <FaTwitter/>
                </Link>
                <Link to="/not-found" className="social-icon">
                    <FaFacebook/>
                </Link>
                <Link to="/not-found" className="social-icon">
                    <FaInstagram/>
                </Link>
            </div>
        </header>
    );
};

export default Header;