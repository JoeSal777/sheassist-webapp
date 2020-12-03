import React from "react";


function ButtonDesigner(props){
    return(
        <div className="buttondesigner_area">
            { props.text && <p className="buttondesigner_text">{props.text}</p> }
        </div> 
    );
}
export default ButtonDesigner;