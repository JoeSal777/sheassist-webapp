import React from "react";


function Card(props){
    return(
        <div className="card_area">
            { props.imgSrc && <img className="card_imgSrc" src={props.imgSrc} alt={props.imgSrc} /> }
            <div className="card-info">
                { props.Name && <h3 className="card_Name">{props.Name}</h3> }
                { props.subTitle && <p className="card_subTitle">{props.subTitle}</p> }
                { props.Link && <p className="card_Link">{props.Link}</p> }
            </div>
        </div> 
    );
}
export default Card;