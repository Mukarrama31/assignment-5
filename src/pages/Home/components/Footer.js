/* src/pages/Home/components/Footer.js */

import React, { useState } from 'react';
import Dialog from './Dialog';
import '../styles/Footer.css';
import '../styles/Dialog.css';

const Footer = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>LeMagisin Store &copy; 2024</p>
                <button className="dialog-button" onClick={() => setDialogOpen(true)}>Talk to Us</button>
                {isDialogOpen && <Dialog onClose={handleCloseDialog} />}
            </div>
        </footer>
    );
};

export default Footer;
