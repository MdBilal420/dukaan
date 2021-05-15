import React from 'react';
// import Card from '../Card';
import '../../styles/card.css';
import { useProduct } from '../../context/product-context';
import CartCard from './CartCard';


const CartList = () => {

    const { cartList } = useProduct()


    return (
        <div className="product-container">
            <div className="row">
                {cartList.map(
                    (item) => (
                        <CartCard details={item} key={item._id} />
                    )
                )}
            </div>
        </div>
    )
}

export default CartList
