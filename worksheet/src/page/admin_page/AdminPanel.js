import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';

function AdminPanel() {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: ''  // Add imageUrl to formData
    });
    const [imageFile, setImageFile] = useState(null);
    const [editProductId, setEditProductId] = useState(null);

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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddProduct = async () => {
        const newFormData = new FormData();
        newFormData.append('name', formData.name);
        newFormData.append('description', formData.description);
        newFormData.append('price', formData.price);
        if (imageFile) {
            newFormData.append('image', imageFile);  // Attach image file if provided
        } else if (formData.imageUrl) {
            newFormData.append('imageUrl', formData.imageUrl);  // Attach imageUrl if provided
        }

        try {
            const response = await axios.post('http://localhost:5000/api/products', newFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setProducts([...products, response.data.product]);
            setFormData({ name: '', description: '', price: '', imageUrl: '' });
            setImageFile(null);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleEditProduct = (product) => {
        setFormData(product);
        setEditProductId(product._id);
    };

    const handleUpdateProduct = async () => {
        const updatedFormData = new FormData();
        updatedFormData.append('name', formData.name);
        updatedFormData.append('description', formData.description);
        updatedFormData.append('price', formData.price);
        if (imageFile) {
            updatedFormData.append('image', imageFile);  // Attach image file if updated
        } else if (formData.imageUrl) {
            updatedFormData.append('imageUrl', formData.imageUrl);  // Attach imageUrl if updated
        }

        try {
            const response = await axios.put(`http://localhost:5000/api/products/${editProductId}`, updatedFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const updatedProducts = products.map((product) =>
                product._id === editProductId ? response.data.product : product
            );
            setProducts(updatedProducts);
            setEditProductId(null);
            setFormData({ name: '', description: '', price: '', imageUrl: '' });
            setImageFile(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>

            <div className="product-form">
                <h2>{editProductId ? 'Edit Product' : 'Add Product'}</h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="input-field"
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                    className="input-field"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Product Price"
                    className="input-field"
                />
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="Image URL (optional)"
                    className="input-field"
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="input-field"
                />
                {editProductId ? (
                    <button onClick={handleUpdateProduct} className="btn-update">Update Product</button>
                ) : (
                    <button onClick={handleAddProduct} className="btn-add">Add Product</button>
                )}
            </div>

            <div className="product-list">
                <h2>Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>
                                    {product.imageUrl && <img src={`http://localhost:5000${product.imageUrl}`} alt={product.name} width="100" />}
                                </td>
                                <td>
                                    <button onClick={() => handleEditProduct(product)} className="btn-edit">Edit</button>
                                    <button onClick={() => handleDeleteProduct(product._id)} className="btn-delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminPanel;
