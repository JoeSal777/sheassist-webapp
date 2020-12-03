import React, { Component } from 'react';
import ContactForm from "./page_components/ContactForm";
import ContactSocialButtons from './page_components/ContactSocialButtons';


export default class Contact extends Component {
    render() {
        return (
            <div className="contactPage_main_area">

                <div className="row contact-row">

                    {/* left-side */}
                    <div className="column contact-column left-column contact-left-column">
                        <ContactForm />
                    </div>

                    {/* right-side */}
                    <div className="column contact-column contact-right-column">
                        <ContactSocialButtons/>
                    </div>
                </div>

            
            </div>
        )
    }
}
