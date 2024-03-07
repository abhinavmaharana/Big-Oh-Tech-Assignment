const API_ENDPOINT = 'https://dummyjson.com/products';

const PAGE_SIZE = 100;

export const fetchProducts = async () => {
    const response = await fetch(`${API_ENDPOINT}?limit=${PAGE_SIZE}`);
    return response.json();
};
  

export const postProduct = async (newProduct: { title: string; description: string; price: number }) => {
    const response = await fetch(`${API_ENDPOINT}/add`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
  
    return response.json();
};
