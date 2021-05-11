import React from 'react'
import { useProduct } from '../../context/product-context'

const Increment = ({ details }) => {

    const { _id, name, image, fastDelivery, productName, quantity }
        = details

    const { dispatch } = useProduct()

    return (
        <span
            className="material-icons"
            onClick={() => dispatch({ type: "INCREMENT", payload: { _id, name, image, fastDelivery, productName, quantity } })}>
            add
        </span>
    )
}

export default Increment
