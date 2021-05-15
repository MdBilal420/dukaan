import React from 'react'
// import { useParams } from 'react-router'
import { useProduct } from '../context/product-context'


import "../styles/productdetail.css";
import ProductCardAction from './Product/ProductCardAction';


const ProductDetail = () => {

    const { productDetail } = useProduct()

    const { name, image, fastDelivery, inStock, price }
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
                <ProductCardAction details={productDetail} />
            </div>
        </div>

    )
}

export default ProductDetail
