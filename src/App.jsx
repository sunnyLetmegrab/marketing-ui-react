import { useState } from 'react'
import './App.css'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Navbar from './component/nav-bar';
import Footer from './component/footer';

function App() {

 
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
