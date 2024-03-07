import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ProductList from './components/ProductList';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-screen-lg w-full p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-semibold mb-6">My React Query App</h1>
          <ProductList />
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
