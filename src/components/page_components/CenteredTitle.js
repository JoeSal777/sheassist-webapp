import React from "react";


function CenteredTitle(props){
    return(
        <div className="centeredTitle_area">
            { props.preTitle && <h3 className="centeredtitle_pretitle">{props.preTitle}</h3> }
            { props.title && <h2 className="centeredtitle_title">{props.title}</h2> }
            { props.subTitle && <h3 className="centeredtitle_subtitle">{props.subTitle}</h3> }
            { props.text && <p className="centeredtitle_text">{props.text}</p> }
        </div> 
    );
}
export default CenteredTitle;