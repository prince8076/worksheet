import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailsPage.css';

function ProductDetailsPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();
    }, [productId]);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const totalPrice = product.price * quantity;

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} className="product-details-image" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            <div className="quantity-selection">
                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                />
            </div>

            <p>Total Price: ${totalPrice.toFixed(2)}</p>

            <button className="checkout-btn">Proceed to Checkout</button>
        </div>
    );
}

export default ProductDetailsPage;
