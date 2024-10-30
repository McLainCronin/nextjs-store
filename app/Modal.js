"use client"
import React from 'react'
import ReactDom from 'react-dom'
import useCart from './(store)/store'

export default function Modal() {
    const closeModal = useCart(state => state.setOpenModal)
    return ReactDom.createPortal(
        <div className='fixed fixed top-0 left-0 w-screen h-screen z-50'>
            <div className='bg-green-200 aboslute inset-0'></div>
            <div className='flex flex-col bg-white absolute right-0 top-0 h-screen gap-4 shadow-lg w-screen sm:w-96 max-w-screen'>
                <div className='flex items-center p-6 justify-between text-xl relative'>
                    <h1>
                        Cart
                    </h1>
                    <i className="fa-solid fa-xmark"></i>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3'>

                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
