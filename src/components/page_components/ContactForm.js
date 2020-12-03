import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {BiMailSend} from "react-icons/bi";

class ContactForm extends Component {

    constructor(props){
        super();
        this.state = {
            name: " ",
            email: " ",
            message: " ",
            disabled: " ",
            emailSent: " "
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({
            disable: true
        });
    }

    render() {
        return (
            <div className="formArea">
                <h2 className="heading">Let's Talk</h2>

                <div className="content">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <div className="formGroups">
                                <Form.Label htmlFor="Full-name">
                                    Name
                                </Form.Label>
                                <Form.Control 
                                    className="form-field" 
                                    id="full-name" name="name" 
                                    type="text" 
                                    value={this.state.name} 
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="formGroups">
                                <Form.Label htmlFor="email">
                                    Email
                                </Form.Label>
                                <Form.Control 
                                    className="form-field" 
                                    id="email" name="email" 
                                    type="email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="formGroups">
                                <Form.Label htmlFor="message">
                                    Message
                                </Form.Label>
                                <Form.Control 
                                    className="form-field" 
                                    id="message" 
                                    name="message" 
                                    as="textarea" 
                                    rows="3" 
                                    value={this.state.message} 
                                    onChange={this.handleChange}
                                />
                            </div>
                                
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            <BiMailSend className="icon"/>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email not sent</p>}
                    </Form>
                </div>
            </div>
        );
    }
}

export default ContactForm;