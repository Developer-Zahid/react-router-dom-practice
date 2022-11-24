import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../header/Navbar'
import Footer from './../footer/Footer'

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default RootLayout