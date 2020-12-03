import React, { Component } from 'react';

import CenteredTitle from "./page_components/CenteredTitle";
import ColorStrip from "./page_components/ColorStrip";

export default class Services extends Component {
    render() {
        return (
            <div className="aboutus_section1_wrapper">
                <div className="aboutus_section1">
                    <div className="aboutus_section1_centeredtitle">
                        <CenteredTitle
                            title={"Services at SheAssist"}
                            subTitle={"Social Media Management"}
                        />
                    </div>
                </div>
                <ColorStrip /> 
            </div>
        )
    }
}
