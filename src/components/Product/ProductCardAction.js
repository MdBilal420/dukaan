import React from 'react'
import '../../styles/card.css'
import { useData } from '../../context/product-context';
import DeleteFromWishlist from '../WishList/DeleteFromWishlist';
import AddToWishlist from '../WishList/AddToWishlist';
import AddToCart from '../Cart/AddToCart'
import { Link } from 'react-router-dom';
import OutOfStock from '../OutOfStock';


const ProductCardAction = ({ details }) => {


    const { _id, inStock } = details
    const { state } = useData()

    const presentInCart = () => {
        return state.cartlist.find((item) => item.product._id === _id)
    }

    const presentInWishlist = () => {
        return state.wishlist.find((item) => item.product._id === _id)
    }


    return (
        <div className="product-links-cart">
            {
                presentInWishlist() ?
                    <DeleteFromWishlist details={details} />
                    :
                    <AddToWishlist details={_id} />
            }


            {presentInCart() ? <Link to={'/cart'} className="button-link">
                Go to Cart
            </Link> :
                inStock ?
                    <AddToCart details={_id} /> :
                    <OutOfStock />
            }
        </div>
    )
}

export default ProductCardAction;