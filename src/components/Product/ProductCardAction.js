import React from 'react'
import '../../styles/card.css'
import { useProduct } from '../../context/product-context';
import { Link } from 'react-router-dom'
import DeleteFromWishlist from '../WishList/DeleteFromWishlist';
import AddToWishlist from '../WishList/AddToWishlist';
import AddToCart from '../Cart/AddToCart';
import OutOfStock from '../OutOfStock';


const ProductCardAction = ({ details }) => {

    const { _id, inStock } = details

    const { cart, wishlist } = useProduct()


    return (
        <div className="product-links-cart">
            {
                wishlist.find((item) => item._id === _id) ?
                    <DeleteFromWishlist details={details} />
                    :
                    <AddToWishlist details={details} />
            }

            {
                cart.find((item) => item._id === _id) ?
                    <Link to="/cart" className="button-link">
                        Go To Cart
                    </Link>
                    :
                    inStock ?
                        <AddToCart details={details} />
                        :
                        <OutOfStock />
            }
        </div>
    )
}

export default ProductCardAction;