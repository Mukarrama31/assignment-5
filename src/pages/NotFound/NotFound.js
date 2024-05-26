/* src/pages/NotFound/NotFound.js */

import React from 'react';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import Banner from './components/Banner';
import './NotFound.css';

function NotFound() {
    return (
        <div className="app-container">
            <Header />
            <Banner />
            <div className="notfound-container">
                <div className="notfound-subcontainer">
                    <h1>Pssst! Are you lost? We can help.</h1>
                    <h1>Click the logo icon to find your way to the homepage!</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFound;