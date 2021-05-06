import React from 'react'
import { useProduct } from '../context/product-context'
import Card from './Card'
import '../styles/style.css'



const emptyStyle = {
    textAlign: "center",
    fontSize: "5rem",

}

const Wishlist = () => {

    const { wishlist } = useProduct()
    console.log(wishlist)
    return (
        <>

            <h1 style={{ textAlign: "center" }}>Wishlist</h1>

            <div className="row">

                {
                    wishlist.length === 0 ? <div style={emptyStyle}>Wishlist is Empty</div> :
                        wishlist.map((item) => (
                            <Card details={item} key={item._id} />
                        ))
                }

            </div>
        </>
    )
}


export default Wishlist