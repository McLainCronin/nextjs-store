"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
import useCart from './(store)/store'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard(props) {
  const { product } = props
  const {id: price_id, unit_amount: cost, product: productInfo} = product
  const { name, description } = productInfo

  const setProduct = useCart(state => state.setProduct)

  const router = useRouter()

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo
    }
    setProduct({ newProduct })
    router.push('/product?price_id=' + price_id)
  }
  return (
    <div onClick={onProductClick} className='flex flex-col shadow bg-slate-700 hover:scale-103 hover:shadow-lg cursor-pointer text-white'>
      <img src={productInfo.images[0]} alt={name} className='w-full h-full object-cover' />
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex items-center justify-between'>
          <h3>{name}</h3>
          <p>${cost/100}</p>
        </div>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}
