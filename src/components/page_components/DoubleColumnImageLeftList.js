import React from 'react';

function DoubleColumnImageLeftList(props) {
    return (
        <div className="doublecolumnimageleftlist">
            <div className="row doublecolumnimageleftlist-row">

                {/* left-side */}
                <div className="column doublecolumnimageleftlist-column left-column doublecolumnimageleftlist-left-column">
                    {props.image && <img src={props.image} alt={props.image} className="doublecolumnimageleftlist-img"/>} 
                </div>

                {/* right-side */}
                <div className="column doublecolumnimageleftlist-column right-column doublecolumnimageleftlist-right-column">
                    <div className="doublecolumnimageleftlist_text_area">
                        <div className="doublecolumnimageleftlist_text">
                            { props.pretitle && <h3 className="doublecolumnimageleftlist_pretitle">{props.pretitle}</h3> }
                            { props.title && <h2 className="doublecolumnimageleftlist_title">{props.title}</h2> }
                            { props.subTitle && <h3 className="doublecolumnimageleftlist_subtitle">{props.subTitle}</h3> }
                            { props.text && <p className="doublecolumnimageleftlist_text">{props.text}</p> }

                            <div className="doublecolumnimageleftlist_area">
                                <ul className="doublecolumnimageleftlist_listbox">
                                    { props.item1 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item1}
                                        </p>        
                                    </li> }
                                    { props.item2 && <li className="doublecolumnimageright_list_list_item">  
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item2} 
                                        </p>        
                                    </li> }
                                    { props.item3 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item3}
                                        </p>        
                                    </li> }
                                    { props.item4 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item4}
                                        </p>        
                                    </li> }
                                    { props.item5 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item5}
                                        </p>        
                                    </li> }
                                    { props.item6 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item6}
                                        </p>        
                                    </li> }
                                    { props.item7 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item7}
                                        </p>        
                                    </li> }
                                    { props.item8 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item8}
                                        </p>        
                                    </li> }
                                    { props.item9 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item9}
                                        </p>        
                                    </li> }
                                    { props.item10 && <li className="doublecolumnimageright_list_list_item">   
                                        <p className="doublecolumnimageleftlist_list_textbox">
                                            {props.item10}
                                        </p>        
                                    </li> } 
                                </ul>
                            </div>
                        </div> 
                    </div>

                </div>

            </div>
        </div>
    );
}

export default DoubleColumnImageLeftList;