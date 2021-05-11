import React from 'react'
import { useProduct } from '../../context/product-context'

const Decrement = ({ details }) => {

    const { _id, name, image, fastDelivery, productName, quantity } = details

    const { dispatch } = useProduct()


    return (
        <span
            className="material-icons"
            onClick={() => dispatch({ type: "DECREMENT", payload: { _id, name, image, fastDelivery, productName, quantity } })}>
            remove
        </span>
    )
}

export default Decrement
