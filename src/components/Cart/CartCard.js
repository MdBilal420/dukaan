import React from 'react'
import { useProduct } from '../../context/product-context'
import '../../styles/style.css'
import { useNavigate } from "react-router-dom";
import CartCardAction from './CartCardAction'
import CartCardInfo from './CartCardInfo'



const CartCard = ({ details }) => {

    const { _id, name, price } = details

    const { dispatch } = useProduct()
    const navigate = useNavigate()

    const selectProduct = (id) => {
        if (id) {
            dispatch({ type: "SELECT_PRODUCT", payload: details })
            navigate(`/product/${id}`)
        } else {
            navigate(`title`)
        }
    }

    return (
        <div
            key={_id}
            className="column"
        >
            <CartCardInfo details={details} />

            <div className="product-details">
                <h4 onClick={() => selectProduct(_id)}> {name} </h4>
                <div className="product-price">${price}</div>
                <CartCardAction details={details} />
            </div>
        </div>
    )
}

export default CartCard
