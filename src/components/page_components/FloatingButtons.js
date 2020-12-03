import React, { Component } from 'react';
import ButtonDesigner from './ButtonDesigner';


class FloatingButtons extends Component {

    state = {
        content_items: [
            {id: 1, content: "Social media management"},
            {id: 2, content: "Graphic designing"},
            {id: 3, content: "Photo editing"},
            {id: 4, content: "video editing"},
            {id: 5, content: "customer service management"},
            {id: 6, content: "personal assistance"},
            {id: 7, content: "writting/blogging"},
            {id: 8, content: "Website development"}
        ]
    }

    render() {

        const { content_items } = this.state;

        return (
            <div className="floatingbuttons_area">
                {content_items.map(item => <ButtonDesigner text={item.content}/>)}
            </div>
        );
    }
}

export default FloatingButtons;