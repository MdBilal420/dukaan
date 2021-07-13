import React from 'react'
import { useData } from '../context/product-context'
import '../styles/style.css'
import CartCard from './Cart/CartCard'

const emptyStyle = {
    textAlign: "center",
    fontSize: "5rem",
}

const Cart = () => {

    const { state } = useData()

    console.log(state.cartlist)


    const getBill = () => {
        const val = state.cartlist.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
        return val
    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            {
                state.cartlist.length > 0 &&
                <fieldset style={{ textAlign: 'center' }}>
                    <h3>Total Amount : {getBill()}</h3>
                </fieldset>
            }

            <div className="row">
                {
                    state.cartlist.length === 0 ? <div style={emptyStyle}>Cart is Empty</div> :
                        state.cartlist.map((item) => (
                            <CartCard details={item} key={item._id} />
                        ))
                }
            </div>
        </>
    )
}


export default Cart;