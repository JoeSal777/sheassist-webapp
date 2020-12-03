import React from "react";


function UnorderedList(props){
    return(
        <div className="unorderedlist_area">
            <ul className="listbox">
                
                { props.item1 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item1}
                    </p>        
                </li> } 
                { props.item2 && <li className="UnorderedList_item">  
                    <p className="UnorderedList_textbox">
                        {props.item2} 
                    </p>        
                </li> }
                { props.item3 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item3}
                    </p>        
                </li> }
                { props.item4 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item4}
                    </p>        
                </li> }
                { props.item5 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item5}
                    </p>        
                </li> }
                { props.item6 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item6}
                    </p>        
                </li> }
                { props.item7 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item7}
                    </p>        
                </li> }
                { props.item8 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item8}
                    </p>        
                </li> }
                { props.item9 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item9}
                    </p>        
                </li> }
                { props.item10 && <li className="UnorderedList_item">   
                    <p className="UnorderedList_textbox">
                        {props.item10}
                    </p>        
                </li> }
                
                
            </ul>

            
        </div> 
    );
}
export default UnorderedList;