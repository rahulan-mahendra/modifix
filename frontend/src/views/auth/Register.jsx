import React from 'react'
import { Link } from 'react-router-dom';
import './auth.css';
import image from '../../img/modifix_ori.png'

const Register = () => {
    return (
        <div className="container_a">
            <div className="cover">
                <div className="front">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="forms">
            <div className="form-content">
            <div className="signup-form">
                    <div className="title">Signup</div>
                    <form action="#">
                        <div className="input-boxes">
                        <div className="input-box">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Enter your name" required/>
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="button input-box">
                            <input type="submit" value="Sumbit"/>
                        </div>
                        <div className="text sign-up-text">Already have an account? <Link to="/login">Log In</Link></div>
                        </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register