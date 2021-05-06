import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProduct } from '../../context/product-context'

import './navbar.css'


const Nav = () => {

    const { cart, wishlist } = useProduct()
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const redirect = () => {
        navigate("/")
    }

    return (
        <div className="navbar">
            <div className="logo" onClick={redirect} style={{ cursor: "pointer" }}>
                <span style={{ fontFamily: "Cursive", fontWeight: "bolder", fontSize: "3rem" }}>DUKAAN</span>
            </div>
            <nav className="nav">
                <ul id={menu ? "hidden" : ""}>
                    <li><Link to="/" className="lnk" >Home</Link></li>
                    <li>
                        <Link to="/cart" className="lnk" >
                            Cart<sup>{cart.length === 0 ? null : cart.length}</sup>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wishlist" className="lnk" >
                            Wishlist<sup>{wishlist.length === 0 ? null : wishlist.length}</sup>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/login" className="lnk">
                            Login
                        </Link>
                    </li> */}
                </ul>
            </nav>

            <span className="material-icons menu" onClick={() => setMenu(!menu)}>menu</span>

        </div>
    )
}

export default Nav;
