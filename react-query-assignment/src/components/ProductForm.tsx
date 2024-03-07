import React, { useState } from 'react';

interface ProductFormProps {
  onAddProduct: (newProduct: any) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    onAddProduct(newProduct);
    // Reset the form after adding a product
    setNewProduct({
      title: '',
      description: '',
      price: 0,
    });
  };

  return (
    <div className="mb-4 p-4 border rounded-md shadow-md">
      <h1 className="text-xl font-semibold mb-2">Add New Product</h1>
      <form>
        <label className="block mb-2 text-gray-700">Name:</label>
        <input
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          className="border rounded-md p-2 mb-2 w-full"
        />

        <label className="block mb-2 text-gray-700">Description:</label>
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          className="border rounded-md p-2 mb-2 w-full"
        ></textarea>

        <label className="block mb-2 text-gray-700">Price:</label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          className="border rounded-md p-2 mb-4 w-full"
        />

        <button
          type="button"
          onClick={handleAddProduct}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
