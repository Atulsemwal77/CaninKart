import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import About from './pages/About';
import Breed from './pages/Breed';
import Product from './pages/Product';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Marketplace from './pages/Marketplace';
import Contact from './pages/Contact.jsx';
import MarketPlacedetails from './pages/MarketPlacedetails.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'breed', element: <Breed /> },
      { path: 'product',
         element: <Product /> },
         {
          path:"/product/:id",
          element:<ProductDetail />
         },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,  // Your BlogDetails component to show details per id
      },

      {
        path: '/marketplace',
        element: <Marketplace />
      },
      {
        path: "marketplacedetails/:cityId",
        element: <MarketPlacedetails />
      },
      { path: 'contact', element: <Contact /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
