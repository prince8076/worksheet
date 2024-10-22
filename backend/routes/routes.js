// // Route to add a new product
// app.post('/api/products', async (req, res) => {
//     const { name, description, price, imageUrl } = req.body;
//     try {
//         const newProduct = new Product({ name, description, price, imageUrl });
//         await newProduct.save();
//         res.status(201).json({ message: 'Product added successfully', product: newProduct });
//     } catch (error) {
//         res.status(500).json({ error: 'Error adding product' });
//     }
// });

// // Route to update a product
// app.put('/api/products/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, description, price, imageUrl } = req.body;
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price, imageUrl }, { new: true });
//         if (!updatedProduct) {
//             return res.status(404).json({ error: 'Product not found' });
//         }
//         res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
//     } catch (error) {
//         res.status(500).json({ error: 'Error updating product' });
//     }
// });

// // Route to delete a product
// app.delete('/api/products/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(id);
//         if (!deletedProduct) {
//             return res.status(404).json({ error: 'Product not found' });
//         }
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error deleting product' });
//     }
// });
