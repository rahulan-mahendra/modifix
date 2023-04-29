import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        	<div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                <div className="site-logo1">
                                    <Link to="/">
                                        <img src="img/modifix.png" alt=""/>
                                    </Link>
                                </div>

                                <nav className="main-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="products">Products</Link></li>
                                        <li><Link to="about">About</Link></li>
                                        {/* <li><Link to="contact.html">Contact</Link></li> */}
                                        
                                            {/* <div className="header-icons"> */}
                                        <li>
                                                <Link className="shopping-cart" to="cart">Cart</Link>
                                        </li>
                                        <li>
                                                <Link className="shopping-cart" to="cart.html"><i className="fas fa-user"></i></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="profile">Profile</Link></li>
                                                    <li><Link to="logout">Logout</Link></li>
                                                </ul>
                                        </li>
                                            {/* </div> */}
                                    </ul>
                                </nav>
                                <Link className="mobile-show search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                                <div className="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header