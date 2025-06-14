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
import Dashboard from './dashboard/OverView.jsx';

import CountryPage from './dashboard/components/CountryPage.jsx';
import StatePage from './dashboard/components/StatePage.jsx';
import DistrictPage from "./dashboard/components/DistrictPage.jsx"
import DashboardLayout from './dashboard/OutletLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'dogbreed', element: <Breed /> },
      { path: 'product', element: <Product /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      { path: 'marketplace', element: <Marketplace /> },
      { path: 'marketplacedetails/:cityId', element: <MarketPlacedetails /> },
      { path: 'contact', element: <Contact /> },
      // { path: 'CountryPage', element: <CountryPage /> }
    ],
  },
 
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true , element: <Dashboard /> },
      { path : 'countrypage', element : <CountryPage/>},
      { path: "state/:countryName/:countryId", element: <StatePage/> },
      { path : "district/:countryId/:stateName/:stateId" ,element:<DistrictPage/>}

    
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
