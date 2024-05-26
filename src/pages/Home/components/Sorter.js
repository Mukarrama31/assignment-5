/* src/pages/Home/styles/Sorter.js */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Sorter.css';

function Sorter({ onSortByName, onSortByPrice, onSortByRating }) {
    return (
        <div className="sorter-container">
            <button className="sort-button" onClick={onSortByName}>Sort by Name</button>
            <button className="sort-button" onClick={onSortByPrice}>Sort by Price</button>
            <button className="sort-button" onClick={onSortByRating}>Sort by Rating</button>
        </div>
    );
}

Sorter.propTypes = {
    onSortByName: PropTypes.func,
    onSortByPrice: PropTypes.func,
    onSortByRating: PropTypes.func,
};

Sorter.defaultProps = {
    onSortByName: () => {},
    onSortByPrice: () => {},
    onSortByRating: () => {},
};

export default Sorter;


