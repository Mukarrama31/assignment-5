/* src/pages/Home/components/Banner.js */

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="banner">

            <div className="banner-content">

                <div className="banner-links">
                    <Link to="/products" className="banner-link">
                        Products
                    </Link>
                    <Link to="/cart" className="banner-link">
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
