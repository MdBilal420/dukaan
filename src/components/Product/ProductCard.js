import '../../styles/card.css'
import '../../styles/style.css'
import React from 'react'
import ProductCardAction from './ProductCardAction'
import { useNavigate } from "react-router-dom";
import { useProduct } from '../../context/product-context'
import ProductCardInfo from './ProductCardInfo';


const ProductCardDetails = ({ details }) => {

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
            <ProductCardInfo details={details} />

            <div className="product-details">
                <h4 onClick={() => selectProduct(_id)}> {name} </h4>
                <div className="product-price">${price}</div>
                <ProductCardAction details={details} />
            </div>


        </div >
    )
}

export default ProductCardDetails
