import React, { Component } from 'react';
import CenteredTitle from "./CenteredTitle";

class ContactSocialButtons extends Component {
    render() {
        return (
            <div className="contact_info_area">
                <CenteredTitle
                    title={"Contact info would come here"}
                    subTitle={"Email, officel location, telephone, social media handles, etc"}
                />     
            </div>
        );
    }
}

export default ContactSocialButtons;