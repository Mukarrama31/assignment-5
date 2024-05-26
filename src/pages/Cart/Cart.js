/* src/pages/Cart/Cart.js */

import React from 'react';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import Banner from '../Home/components/Banner';
import './Cart.css';

function Cart() {
    return (
        <div className="app-container">
            <Header/>
            <Banner/>
            <div className="cart-container">
            <h4>Your Cart</h4>
                <div className="cart-subcontainer">
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;