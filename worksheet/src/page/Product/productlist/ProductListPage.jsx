import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductListPage.css';

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="product-list">
            <h1>Products</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <div className="product-image-wrapper">
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                        </div>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">
                            ${product.price ? product.price.toFixed(2) : 'N/A'}
                        </p>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product._id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;
