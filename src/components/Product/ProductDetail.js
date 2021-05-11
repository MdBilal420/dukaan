import React from 'react'
// import { useParams } from 'react-router'
import { useProduct } from '../../context/product-context'
import { Link } from 'react-router-dom'

import "../../styles/productdetail.css";
import ProductCard from './ProductCard';


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
                <ProductCard details={productDetail} />
            </div>
        </div>

    )
}

export default ProductDetail
