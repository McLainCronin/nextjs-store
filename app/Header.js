"use client"
import React from 'react'
import Link from 'next/link'
import useCart from './(store)/store'
import Modal from './Modal'

export default function Header() {
    const cartItems = useCart(state => state.cart)
    const openModal = useCart(state => state.openModal)
    const setOpenModal = useCart(state => state.setOpenModal)
    console.log(cartItems)

  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
        {openModal && (
            <Modal />
        )}
        <Link href={'/'}>
            <h1 className="uppercase cursor-pointer hover:scale-105">Fruit Shop</h1>
        </Link>
        <div onClick={setOpenModal} className='relative cursor-pointer group grid place-items-center'>
            {cartItems.length > 0 && (
                <div className='absolute aspect-square h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/3 translate-x-1/2 pointer-events-none'>
                    <p className='text-xs sm:text-sm'>{cartItems.length}</p>
                </div>
            )}
            <i className="fa-solid cursor-pointer hover:scale-105 group-hover:text-slate-500 fa-cart-shopping"></i>
        </div>
    </header>
  )
}
