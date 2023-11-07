import React from 'react'
import { Footer } from './Components/Footer'
import { Navigation } from './Components/Navigation'
import {Outlet} from 'react-router-dom'

export  const Layout = () => {
  return (
    <div>
        <div >
           <Navigation/>
           <Outlet/>
           <Footer/>
        </div>
    </div>
  )
}


