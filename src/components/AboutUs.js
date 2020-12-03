import React, { Component } from 'react';

import CenteredTitle from "./page_components/CenteredTitle";
import Carousel from "./page_components/Carousel";
import Slider from "./page_components/Slider";
import FloatingButtons from "./page_components/FloatingButtons";
import DoubleColumnPictureRight from "./page_components/DoubleColumnPictureRight";
import DoubleColumnPictureLeft from "./page_components/DoubleColumnPictureLeft";
import DoubleColumnImageRightList from "./page_components/DoubleColumnImageRightList";
import DoubleColumnImageLeftList from "./page_components/DoubleColumnImageLeftList";

import ourVisionImg from "../images/our-vision.jpg";
import ourMissionImg from "../images/our-mission.png";
import ourValuesImg from "../images/our-values.jpg";
import chooseUsImg from "../images/choose-us.png";

import ColorStrip from "./page_components/ColorStrip";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUs_main_area">

                <div className="aboutus_section1_wrapper">
                    <div className="aboutus_section1">
                        <div className="aboutus_section1_centeredtitle">
                            <CenteredTitle
                                title={"About SheAssist"}
                                subTitle={"The flexible workforce"}
                            />
                        </div>
                        <div className="aboutus_section_carouselslider_area">                        
                            <div className="aboutus_section_carouselslider">                        
                                <Slider />
                            </div>
                        </div>
                        <div className="aboutus_section1_centeredtitle">
                            <CenteredTitle
                                text={"SheAssist was founded in 2017 by a team of passionate individuals with a eventful 5 years experience in:"}
                            />                            
                        </div>
                        <div className="aboutus_section1_floatingbuttons">
                            <FloatingButtons />
                        </div>
                    </div>
                </div>
                


                <div className="aboutus_section2_wrapper">
                    <div className="aboutus_section2"> 
                        <div className="aboutus_section2_centeredtitle">
                            <CenteredTitle
                                title={"SheAssist's Attributes."}
                            />
                        </div> 
                        <div className="aboutus_section2_doublecolumnpictureright">
                            <DoubleColumnPictureRight 
                                pretitle={"1."}
                                title={"Our Vision"}
                                text={"We seek to provide top notch virtual assistants."}
                                image={ourVisionImg}
                            />
                        </div>  
                        <div className="aboutus_section2_doublecolumnpictureleft">
                            <DoubleColumnPictureLeft 
                                pretitle={"2."}
                                title={"Our Mission"}
                                text={"To provide a better alternative to full time employment, thus saving our clients money and time to focus on the real core vision of their business."}
                                image={ourMissionImg}
                            />
                        </div> 
                        <div className="aboutus_section2_doublecolumnpictureright">
                            <DoubleColumnImageRightList 
                                pretitle={"3."}
                                title={"Our Values"}
                                item1={"Help our clients achieve their brand awareness goals."}
                                item2={"Cultivate brand loyalty."}
                                item3={"Create avenues for sales leads"}
                                item4={"Lift administrative burden off clients"}
                                item5={"Provide team spirit to our clients"}
                                item6={"Keep growing to provide a large range of service"}
                                image={ourValuesImg}
                            />
                        </div>
                        <div className="aboutus_section2_doublecolumnpictureleft">
                            <DoubleColumnImageLeftList 
                                pretitle={"4."}
                                title={"Why Choose Us"}
                                item1={"We are an idea tank you can consult and bounce off ideas."}
                                item2={"We create a team spirit workflow between us, our clients and their ideas."}
                                item3={"We are very detailed thus you can trust us to work the very details of our task."}
                                item4={"Working virtually means no need to provide workspace and expensive equipments as you would have done for full time employees"}
                                item5={"Our clients are free of employement taxes and other low requirement that come with employment."}
                                item6={"We are a team of passionate individuals who love what we do and we would do it exceptionally."}
                                image={chooseUsImg}
                            />
                        </div>                 
                    </div>
                </div>               

                <div className="aboutus_section3_wrapper">
                    <div className="aboutus_section3"> 
                        <span className="aboutus_section3_centeredtitle">
                            <CenteredTitle
                                title={"Our Team."}
                                subTitle={"SheAssist is a six(6) member team consisting:"}
                            />
                        </span>
                        <div className="aboutus_carousel">
                            <Carousel/>
                        </div>                   
                    </div>
                </div>
                
                <ColorStrip /> 

            </div>
        )
    }
}
