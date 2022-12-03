import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CartPage = () => {
    let allProductsList = useLoaderData()
    return (
        <>
        <section className="cart section-gap">
            <div className="container">
                <h1>Cart Content</h1>
            </div>
        </section>
        </>
    )
}

export default CartPage