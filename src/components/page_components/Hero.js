import React from "react";


function Hero(props){
    return(
        <div className="hero_area">
            { props.proTitle && <h3 className="hero_protitle">{props.proTitle}</h3> }
            { props.title && <h2 className="hero_title">{props.title}</h2> }
            { props.subTitle && <h3 className="hero_subtitle">{props.subTitle}</h3> }
            { props.text && <p className="hero_text">{props.text}</p> }
        </div> 
    );
}
export default Hero;