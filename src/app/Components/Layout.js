import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { CartProvider } from '@/app/context/shopContext'

export default function Layout({ children }) {

  

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <CartProvider>

      
     

      <main>
        {children}
      </main>
      
      
      </CartProvider>
    </div>
  )
}
