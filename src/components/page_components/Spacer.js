import React from "react";


function Spacer(props){
    return(
        <div className="spacer_area">
            { props.spaceHeight && <h3 className="spacer_height"> </h3> }
        </div> 
    );
}
export default Spacer;