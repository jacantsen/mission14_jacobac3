import React from 'react'
import Navbar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function MainLayout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout