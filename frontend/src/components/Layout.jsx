import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Section from './Section'

function Layout() {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <br /> <br />
      <Section />
      <Footer />
    </div>
  )
}

export default Layout
