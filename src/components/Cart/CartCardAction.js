import React from 'react'
import { useProduct } from '../../context/product-context'
import '../../styles/style.css'
import AddToWishlist from '../WishList/AddToWishlist'
import DeleteFromCart from './DeleteFromCart'
import Increment from './Increment'
import Decrement from './Decrement'
import Quantity from './Quantity'



const CartCardAction = ({ details }) => {

    const { _id, quantity } = details

    const { wishlist } = useProduct()

    return (
        <>

            <div className="product-links-cart">
                <div>
                    {
                        wishlist.find((item) => item._id === _id) ?
                            ""
                            :
                            <AddToWishlist details={details} />
                    }
                    <DeleteFromCart details={details} />
                </div>
                <div className="cart-quantity">
                    {
                        quantity === 1 ? "" : <Decrement details={details} />
                    }
                    <Quantity details={details} />
                    <Increment details={details} />
                </div>


            </div >
        </>
    )
}

export default CartCardAction
