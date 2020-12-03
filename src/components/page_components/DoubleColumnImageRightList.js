import React from 'react';

function DoubleColumnImageRightList(props) {
    return (
        <div className="doublecolumnimagerightlist">
            <div className="row doublecolumnimagerightlist-row">

                {/* left-side */}
                <div className="column doublecolumnimagerightlist-column left-column doublecolumnimagerightlist-left-column">
                    <div className="doublecolumnimagerightlist_text_area">
                        <div className="doublecolumnimagerightlist_text">
                            { props.pretitle && <h3 className="doublecolumnimagerightlist_pretitle">{props.pretitle}</h3> }
                            { props.title && <h2 className="doublecolumnimagerightlist_title">{props.title}</h2> }
                            { props.subTitle && <h3 className="doublecolumnimagerightlist_subtitle">{props.subTitle}</h3> }
                            { props.text && <p className="doublecolumnimagerightlist_text">{props.text}</p> }

                            <div className="doublecolumnimagerightlist_area">
                                <ul className="doublecolumnimagerightlist_listbox">
                                    { props.item1 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item1}
                                        </p>        
                                    </li> }
                                    { props.item2 && <li className="doublecolumnimageright_list_list_item">  
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item2} 
                                        </p>        
                                    </li> }
                                    { props.item3 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item3}
                                        </p>        
                                    </li> }
                                    { props.item4 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item4}
                                        </p>        
                                    </li> }
                                    { props.item5 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item5}
                                        </p>        
                                    </li> }
                                    { props.item6 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item6}
                                        </p>        
                                    </li> }
                                    { props.item7 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item7}
                                        </p>        
                                    </li> }
                                    { props.item8 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item8}
                                        </p>        
                                    </li> }
                                    { props.item9 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item9}
                                        </p>        
                                    </li> }
                                    { props.item10 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimagerightlist_list_textbox">
                                            {props.item10}
                                        </p>        
                                    </li> } 
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>

                {/* right-side */}
                <div className="column doublecolumnimagerightlist-column right-column doublecolumnimagerightlist-right-column">
                    {props.image && <img src={props.image} alt={props.image} className="doublecolumnimagerightlist-img"/>}
                </div>

            </div>
        </div>
    );
}

export default DoubleColumnImageRightList;