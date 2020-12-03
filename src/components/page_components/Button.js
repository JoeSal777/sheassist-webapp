import React from "react";


function Button(props){
    return(
        <div className="button_area">
            { props.text && <p className="button_text">{props.text}</p> }
        </div> 
    );
}
export default Button;