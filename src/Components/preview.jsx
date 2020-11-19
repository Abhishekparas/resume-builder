import React, { Component } from 'react'
import "./preview.css"

const Preview = (props) => {
    let {firstName, lastName,summary,email,phone,profession,street,city,state,country} = props.contact
    return (
        <React.Fragment>
            <div className="fname">{firstName}</div>
            <div className="lname">{lastName}</div>
            <div className="summary">{summary}</div>
            <div className="email">{email}</div>
            <div className="phone">{phone}</div>
            <div className="profession">{}</div>
            <div className="street">{}</div>
            <div className="city">{}</div>
            <div className="state">{}</div>
            <div className="country">{}</div>
        </React.Fragment>
    );
}
 
export default Preview;