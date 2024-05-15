import { useState } from 'react'
import './App.css'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Navbar from './component/nav-bar';
import Footer from './component/footer';

function App() {


  return (
    <>
      <div className='flex flex-col min-h-[100svh] w-full justify-between '>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App
