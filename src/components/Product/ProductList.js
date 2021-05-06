import React from 'react'
import Card from '../Card';
import '../../styles/card.css'


const ProductList = ({ productList }) => {

    return (
        <div className="product-container">
            <div className="row">
                {productList.map(
                    (item) => (
                        <Card details={item} key={item._id} />
                    )
                )}
            </div>
        </div>
    )
}

export default ProductList;
