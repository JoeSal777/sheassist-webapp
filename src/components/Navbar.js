import React, { Component } from 'react';
import logo from '../logo.jpg';
import {FaAlignRight} from "react-icons/fa";
// import {AiOutlineFacebook} from "react-icons/ai";
// import {AiOutlineInstagram} from "react-icons/ai";
// import {AiOutlineLinkedin} from "react-icons/ai";

import {Link} from "react-router-dom"; 


class Navbar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">

                        {/* For logo */}
                        <Link to="/">
                            <img src={logo} alt="SheAssist Logo" />
                        </Link>


                        {/* For menu icon in mobile view */}
                        <button type="button" className="nav-btn-small-screen" onClick={this.handleToggle}>
                            <FaAlignRight className="Nav-icon" />   
                        </button> 
                    </div>

                    {/* For nav menu */}
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/AboutUs">
                                <p>About Us.</p>                                    
                            </Link>
                        </li>
                        <li>
                            <Link to="/Services">
                                <p>Services.</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <p>Contact Us.</p>
                            </Link>
                        </li>
                    </ul>

                    {/* For contact me icon in nav-bar */}
                    <div className="nav-icons-big-screen">
                        <a href="#" className="nav-btn-big-screen">
                            <button type="button">
                                <i className="fas fa-cart-plus" />   
                            </button>
                        </a>
                        <a href="#" className="nav-btn-big-screen">
                            <button type="button">
                                <i className="fas fa-cart-plus" />    
                            </button>
                        </a>
                        <a href="#" className="nav-btn-big-screen">
                            <button type="button Nav-icon">
                                <i className="fas fa-cart-plus" />   
                            </button>
                        </a>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;