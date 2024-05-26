/* src/pages/Home/Home.js */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Sorter from './components/Sorter'; 
import './Home.css';

function Home() {
    const [topRatedProducts, setTopRatedProducts] = useState([]);

    useEffect(() => {
        const fetchTopRatedProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const productsData = response.data;
                const productsWithRatings = productsData.filter(product => product.rating && product.rating.rate != null);
                const sortedProducts = productsWithRatings.sort((a, b) => b.rating.rate - a.rating.rate);
                const top3RatedProducts = sortedProducts.slice(0, 3);
                setTopRatedProducts(top3RatedProducts);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchTopRatedProducts();
    }, []);

    return (
        <div className="app-container">
            <Header />
            <Banner />
            <Sorter
                onSortByName={() => {}}
                onSortByPrice={() => {}}
                onSortByRating={() => {}}
            />
            <div className="home-container">
                <h3>Our Best Sellers</h3>
                <div className="home-subcontainer">
                    {topRatedProducts.map(product => (
                        <div key={product.id} className="home-item">
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
