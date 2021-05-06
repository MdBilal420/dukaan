import React from 'react'
import { useProduct } from '../../context/product-context'
import '../../styles/style.css'


// import { Link } from 'react-router-dom'

const CartCard = ({ details }) => {

    const { _id, name, image, fastDelivery, price, productName, inStock, quantity }
        = details

    console.log(details)

    const { wishlist, dispatch } = useProduct()

    return (
        <>

            <div className="product-links-cart">
                <div>

                    {
                        wishlist.find((item) => item._id === _id) ?
                            ""
                            :
                            <span
                                className="material-icons"
                                onClick={() => dispatch({
                                    type: "ADD_TO_WISHLIST",
                                    payload: { _id, name, image, price, inStock, fastDelivery, productName }
                                })}>
                                favorite_border
                </span>

                    }
                    <span
                        className="material-icons"
                        onClick={() => dispatch({ type: "DELETE_ITEM_FROM_CART", payload: { _id, name, image, fastDelivery, productName } })}>
                        remove_shopping_cart
                    </span>
                </div>
                <div className="cart-quantity">
                    {quantity === 1 ?
                        <span className="material-icons">remove</span>
                        :
                        <span
                            className="material-icons"
                            onClick={() => dispatch({ type: "DECREMENT", payload: { _id, name, image, fastDelivery, productName, quantity } })}>
                            remove</span>
                    }

                    <span style={{ fontSize: "2rem", marginLeft: "20px", marginRight: "20px" }}>{quantity}</span>

                    <span
                        className="material-icons"
                        onClick={() => dispatch({ type: "INCREMENT", payload: { _id, name, image, fastDelivery, productName, quantity } })}>
                        add
                </span>
                </div>


            </div >
        </>
    )
}

export default CartCard
