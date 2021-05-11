import React from 'react'
import { useProduct } from '../../context/product-context'

const DeleteFromCart = ({ details }) => {

    const { _id, name, image, fastDelivery, productName }
        = details

    const { dispatch } = useProduct()

    return (
        <span
            className="material-icons"
            onClick={() => dispatch({ type: "DELETE_ITEM_FROM_CART", payload: { _id, name, image, fastDelivery, productName } })}>
            remove_shopping_cart
        </span>
    )
}

export default DeleteFromCart
