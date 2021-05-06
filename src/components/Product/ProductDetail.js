import React from 'react'
// import { useParams } from 'react-router'
import { useProduct } from '../../context/product-context'
import { Link } from 'react-router-dom'

import "../../styles/productdetail.css";


const ProductDetail = () => {

    const { productDetail } = useProduct()
    const { cart, wishlist, dispatch } = useProduct()

    const { _id, name, image, fastDelivery, inStock, productName, price }
        = productDetail

    return (
        <div className="item-container">
            <div className="product-view">
                <img src={image} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    {inStock && <span className="product-stock">inStock</span>}
                    {fastDelivery && <span className="product-delivery">Fast Delivery</span>}
                </div>
                <h4>Price: ${price}</h4>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {
                        wishlist.find((item) => item._id === _id) ?
                            <span
                                className="material-icons"
                                onClick={() => dispatch({ type: "DELETE_ITEM_FROM_WISHLIST", payload: { _id, name, image, fastDelivery, productName } })}>
                                favorite
                            </span>

                            : <span
                                className="material-icons"
                                onClick={() => dispatch({
                                    type: "ADD_TO_WISHLIST",
                                    payload: { _id, name, image, inStock, fastDelivery, productName, price }
                                })} >
                                favorite_border

                    </span>
                    }

                    {
                        cart.find((item) => item._id === _id) ?
                            <Link to="/cart" className="button-link">
                                Go To Cart
                            </Link>
                            :
                            inStock ? <span className="button-link"
                                onClick={() => dispatch({
                                    type: "ADD_TO_CART",
                                    payload: { _id, name, image, fastDelivery, inStock, productName, quantity: 1, price }
                                })}>
                                Add To Cart
                                </span>
                                :
                                <span className="button-link-disable">
                                    Out Of Stock
                                </span>
                    }
                </div>
            </div>
        </div>

    )
}

export default ProductDetail
