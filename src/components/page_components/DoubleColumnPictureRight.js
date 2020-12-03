import React from 'react';

function DoubleColumnPictureRight(props) {
    return (
        <div className="doublecolumnpictureright">
            <div className="row doublecolumnpictureright-row">

                {/* left-side */}
                <div className="column doublecolumnpictureright-column left-column doublecolumnpictureright-left-column">
                    <div className="doublecolumnpictureright_text_area">
                        <div className="doublecolumnpictureright_text">
                            { props.pretitle && <h3 className="doublecolumnpictureright_pretitle">{props.pretitle}</h3> }
                            { props.title && <h2 className="doublecolumnpictureright_title">{props.title}</h2> }
                            { props.subTitle && <h3 className="doublecolumnpictureright_subtitle">{props.subTitle}</h3> }
                            { props.text && <p className="doublecolumnpictureright_text">{props.text}</p> }
                        </div> 
                    </div>
                </div>

                {/* right-side */}
                <div className="column doublecolumnpictureright-column right-column doublecolumnpictureright-right-column">
                    {props.image && <img src={props.image} alt={props.image} className="doublecolumnpictureright-img"/>}
                </div>

            </div>
        </div>
    );
}

export default DoubleColumnPictureRight;