/* src/pages/Product/Product.js */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import Banner from '../Home/components/Banner';
import Sorter from '../Home/components/Sorter'; 
import './Product.css';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const productsData = response.data;
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProducts();
    }, []);

    
    const handleSortByName = () => {
        const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
        setProducts(sorted);
    };

    const handleSortByPrice = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    };

    const handleSortByRating = () => {
        const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
        setProducts(sorted);
    };

    return (
        <div className="app-container">
            <Header />
            <Banner />
            <Sorter
                onSortByName={handleSortByName}
                onSortByPrice={handleSortByPrice}
                onSortByRating={handleSortByRating}
            />
            <div className="product-container">
                <div className="product-subcontainer">
                    {products.map(product => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
