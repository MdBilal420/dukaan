import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../context/product-context'

import './navbar.css'


const Nav = () => {

    const { state } = useData()
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
                    <Link to="/" className="lnk" ><li>Home</li></Link>
                    <Link to="/cart" className="lnk" >
                        <li>Cart<sup>{state.cartlist.length === 0 ? null : state.cartlist.length}</sup></li>
                    </Link>
                    <Link to="/wishlist" className="lnk" >
                        <li>Wishlist<sup>{state.wishlist.length === 0 ? null : state.wishlist.length}</sup></li>
                    </Link>
                </ul>
            </nav>

            <span className="material-icons menu" onClick={() => setMenu(!menu)}>menu</span>

        </div>
    )
}

export default Nav;
