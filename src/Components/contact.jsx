import React, { Component } from 'react'
import "./contact.css"
import Preview from './preview'

class Contact extends Component {
    state = {}
    render() { 
        return (
            <div className="contact">
                <div className="contact-form">
                    <div className="contact-heading">
                        <h1>Personal Details</h1>
                    </div>
                    <div className="contact-form-details">
                        <div className="input-group">
                            <label htmlFor="">First Name</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Professional Summary</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Phone</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Profession</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Street</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">City</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">State</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Country</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Pincode</label>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div className="preview-form">
                    <Preview></Preview>
                </div>
            </div>
        );
    }
}
 
export default Contact;