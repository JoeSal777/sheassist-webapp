import React from 'react';

function DoubleColumnPictureLeft(props) {
    return (
        <div className="doublecolumnpictureleft">
            <div className="row doublecolumnpictureleft-row">

                {/* left-side */}
                <div className="column doublecolumnpictureleft-column left-column doublecolumnpictureleft-left-column">
                    {props.image && <img src={props.image} alt={props.image} className="doublecolumnpictureleft-img"/>}
                </div>

                {/* right-side */}
                <div className="column doublecolumnpictureleft-column right-column doublecolumnpictureleft-right-column">
                    <div className="doublecolumnpictureleft_text_area">
                        <div className="doublecolumnpictureleft_text">
                            { props.pretitle && <h3 className="doublecolumnpictureleft_pretitle">{props.pretitle}</h3> }
                            { props.title && <h2 className="doublecolumnpictureleft_title">{props.title}</h2> }
                            { props.subTitle && <h3 className="doublecolumnpictureleft_subtitle">{props.subTitle}</h3> }
                            { props.text && <p className="doublecolumnpictureleft_text">{props.text}</p> }
                        </div> 
                    </div>
  
                </div>

            </div>
        </div>
    );
}

export default DoubleColumnPictureLeft;