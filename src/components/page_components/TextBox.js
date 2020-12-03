import React from "react";


function TextBox(props){
    return(
        <div className="textbox_area">
            { props.text && <p className="textbox">{props.text}</p> }
        </div> 
    );
}
export default TextBox;