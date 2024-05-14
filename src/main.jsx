import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import ProductPage from './pages/product.jsx';
import PricePage from './pages/price.jsx';
import 'boxicons'
import ContactUs from './pages/contact.jsx';



var routesr = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: '',
          index: true,
          element: <HomePage />
        },
        {
          path: 'product',
          element: <ProductPage />
        },
        {
          path: 'pricing',
          element: <PricePage/>
        },
        {
          path: 'aboutus',
          element: <></>
        },
        {
          path: 'blog',
          element: <></>
        },
        {
          path: 'contactus',
          element:<ContactUs/>
        },
      ]
    },
  ]

);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routesr} />
  </React.StrictMode>,
)
