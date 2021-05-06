import React from 'react'
import '../../styles/card.css'
import { useProduct } from '../../context/product-context';
import { Link } from 'react-router-dom'


const ProductCard = ({ details }) => {

    const { _id, name, image, fastDelivery, inStock, productName, price }
        = details

    const { cart, wishlist, dispatch } = useProduct()


    return (
        <div className="product-links-cart">
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
    )
}

export default ProductCard;