import '../styles/card.css'
import '../styles/style.css'
import React from 'react'
import ProductCard from './Product/ProductCard'
import CartCard from './Cart/CartCard'
import WishListCard from './WishList/WishListCard'
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from '../context/product-context'


const Card = ({ details }) => {

    const { _id, name, image, price, inStock, fastDelivery, productName } = details
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

    const location = useLocation();


    return (

        <div
            key={_id}
            className="column"
            style={{ cursor: "pointer" }}
        >

            <div className="product-tumb" onClick={() => selectProduct(_id)}>
                <img src={image} alt={productName} />
            </div>

            <div className="badge"
                onClick={() => selectProduct(_id)}
                style={inStock ? { backgroundColor: "#3a87ad" } : { backgroundColor: "#b94a48" }}>
                {inStock ? <span> In Stock </span> : <span> Out of Stock </span>}
            </div>
            <br />
            <div className="badge" style={fastDelivery ? { backgroundColor: "#468847", top: "40px" } : { backgroundColor: "#b94a48", top: "40px" }}>
                {fastDelivery ? (
                    <span> Fast Delivery </span>
                ) : (
                    <span> 3 days minimum </span>
                )}
            </div>

            <div className="product-details">
                <h4 onClick={() => selectProduct(_id)}> {name} </h4>
                <div className="product-price">${price}</div>

                {location.pathname === "/" && <ProductCard details={details} />}
                {location.pathname === "/cart" && <CartCard details={details} />}
                {location.pathname === "/wishlist" && <WishListCard details={details} />}

            </div>


        </div >
    )
}

export default Card;