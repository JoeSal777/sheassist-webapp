import React, { Component } from 'react';
import logo from '../logo.jpg';
import {FaAlignRight} from "react-icons/fa";
import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";

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
                        <a href="https://www.google.com/search?pws=0&q=facebook+react-icons" className="nav-btn-big-screen">
                            <button type="button">
                                <AiOutlineInstagram className="Nav-icon" />   
                            </button>
                        </a>
                        <a href="https://www.google.com/search?pws=0&q=facebook+react-icons" className="nav-btn-big-screen">
                            <button type="button">
                                <AiOutlineLinkedin className="Nav-icon" />   
                            </button>
                        </a>
                        <a href="https://www.google.com/search?pws=0&q=facebook+react-icons" className="nav-btn-big-screen">
                            <button type="button">
                                <AiOutlineFacebook className="Nav-icon" />   
                            </button>
                        </a>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;











// --------------------------------------------------------------



// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import jl_logo from '../logo.jpg';
// import styled from 'styled-components';

// export default class Navbar extends Component{


//     render() {
//         return (
//             <div className="navbar-Wrapper">
//                 <NavWrapper className="navbar my-navbar navbar-expand-sm px-sm-5">

//                     {/* This is for the logo, bootstrap is mainly used to handle styling */}
//                     <Link to='/'>
//                         <img src={jl_logo} alt='Joseph Larkai Logo' className='Navbar-brand'/>
//                     </Link>

//                     {/* This Shows The 'element' text in the Nav Bar */}
//                     <ul className="nav-links justify-content-center">
//                         <li className="nav-item">
//                             <Link to="/resume" className="nav-link">
//                                 Resume.
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/projects" className="nav-link">
//                                 Projects.
//                             </Link>
//                         </li>
//                     </ul>


//                     {/* This is for the cart */}
//                     <Link to="/contact" className="ml-auto mail-button">
//                         <div className="nav-icon">
//                             <span className='mr-2'>
//                                 <i className="fa fa-envelope-o" aria-hidden="true"/>
//                             </span>
//                         </div>
//                     </Link>

//                 </NavWrapper>
//             </div>
                        
//         );
//     }
// }

// // styling for Nav Bar using styled components
// const NavWrapper = styled.nav`
// .nav-link{
//     color:var(--primaryColor) !important;
//     font-size: 0.95rem;
//     text-transform: capitalize !important;
// }
// `