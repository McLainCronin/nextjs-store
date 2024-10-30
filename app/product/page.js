"use client"
import useCart from "../(store)/store"

export default function ProductPage(props) {
const { searchParams } = props
const { price_id } = props
const product = useCart(state => state.product)

console.log(product)

console.log(searchParams)

if (!product?.name) {
    window.location.href = '/'
}
    return (
        <div>
        
        </div>
    )
}