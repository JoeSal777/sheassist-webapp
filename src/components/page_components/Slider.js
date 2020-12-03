import React from "react";

import SliderImg1 from "../../images/slide-img1.jpg";
import SliderImg2 from "../../images/slide-img2.jpg";
import SliderImg3 from "../../images/slide-img3.jpg";
import SliderImg4 from "../../images/slide-img4.jpg";
//recommended img size 500*400

function Slider(){

    let sliderArr = [SliderImg1,SliderImg2,SliderImg4,SliderImg3]

    let imgStyles = {
        width: 100 + "%",
        haight: "auto" 
    }

    return(
        <div className="slider">
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide">
                            <img src={item} alt={item} style={imgStyles}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Slider;