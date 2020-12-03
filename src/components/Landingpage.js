import React, { Component } from 'react'
import featuredImage from "../images/yellow-mug-besides-laptop-sheassistgh.jpg";
import {Link} from "react-router-dom"; 
import Hero from "./page_components/Hero";
import Button from "./page_components/Button";
import Spacer from "./page_components/Spacer";
import ColorStripSticky from "./page_components/ColorStripSticky";


class LandingPage extends Component {
    render(){
        return(

            <div className="landingPage_main_area">
                <div className="row landingpage-row">

                    {/* left-side */}
                    <div className="column landingpage-column left-column landingpage-left-column">
                    <img src={featuredImage} alt="featured" className="card-img-top"/>
                    </div>

                    {/* right-side */}
                    <div className="column landingpage-column right-column landingpage-right-column">
                        <div className="hero_one_landingpage">
                            <Hero 
                                proTitle={"Take your business to the next level"}
                                title={"The Smart Way."}
                                text={"Get access to top notch virtual services. Rather than hirng full time employees, let the experts handle it. Save money and have more time to focus onthe real core vision of your business"}
                            />
                        </div>

                        <Spacer  spaceHeight={""}/>

                        <Link to="/" className="landingpage-hero-button-linkarea">
                            <Button
                                text={"Get Started"}
                            />
                        </Link>
                    </div>
                
                </div>

                <ColorStripSticky />    
            </div>
            
            
        )
    }
}

export default LandingPage;