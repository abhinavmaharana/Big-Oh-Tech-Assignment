import React from 'react';
import { useQuery, useMutation } from 'react-query';
import { fetchProducts, postProduct } from '../api/api';
import ProductForm from './ProductForm';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    images: string[];
}

interface ApiResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

const ProductList: React.FC = () => {
    const { data: products, refetch } = useQuery<ApiResponse>(
        ['products', { page: 1 }],
        fetchProducts as any,
      );

  const addProductMutation = useMutation(postProduct, {
    onSuccess: () => {
        refetch();
        window.alert('Product added successfully!');
      },
      onError: (error) => {
        window.alert(`Failed to add product. Error: ${error}`);
      },
  });

  const handleAddProduct = (newProduct: any) => {
    addProductMutation.mutate(newProduct);
  };

  console.log(products)

  return (
    <div className="max-w-auto mx-auto mt-10 p-4 border border-gray-300 shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      
      <ProductForm onAddProduct={handleAddProduct} />

      <div>
        {products?.products?.slice().reverse()?.map((product: any) => (
          <div key={product.id} className="mb-4 p-4 border rounded-md shadow-md">
            <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-500 mt-2">Price: {product.price}</p>
            <p className="text-gray-500 mt-2">Brand: {product.brand}</p>
            <div className="flex space-x-2 mt-5">
              {product.images.map((image: string | undefined, index: React.Key | null | undefined) => (
                <img key={index} src={image} alt={`Product ${index}`} className="w-40 h-40 rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
