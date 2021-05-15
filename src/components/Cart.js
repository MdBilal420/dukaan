import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/product-context'
// import Card from './Card'
import '../styles/style.css'
import CartCard from './Cart/CartCard'

const emptyStyle = {
    textAlign: "center",
    fontSize: "5rem",

}

const Cart = () => {

    const { cart } = useProduct()
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const getBill = () => {
            const val = cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
            setPrice(val)
        }
        getBill()

    })


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            {
                cart.length > 0 &&
                <fieldset style={{ textAlign: 'center' }}>
                    <h3>Total Amount : {price}</h3>
                </fieldset>
            }

            <div className="row">
                {
                    cart.length === 0 ? <div style={emptyStyle}>Cart is Empty</div> :
                        cart.map((item) => (
                            <CartCard details={item} key={item._id} />
                        ))
                }

            </div>
        </>
    )
}


export default Cart;