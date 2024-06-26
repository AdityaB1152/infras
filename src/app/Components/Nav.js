"use client"
import Link from 'next/link'
import { useContext, useState } from 'react'
import { CartContext, CartProvider } from '../context/shopContext'
import MiniCart from './MiniCart'

export default function Nav() {
  // const { cart, cartOpen, setCartOpen } = useContext(CartProvider)
  const cart = [];
  const [cartOpen , setCartOpen] = useState(true);

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          
            <span className="text-lg pt-1 font-bold">
              Shopify + Next.js
            </span>
          
        </Link>
        <a 
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
          >
          Cart ({cartQuantity})
        </a>
        <CartProvider>
        <MiniCart cart={cart} />
        </CartProvider>
        
      </div>
    </header>
  )
}
