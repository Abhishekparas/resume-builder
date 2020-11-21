import React, { Component } from 'react'
import "./preview.css"

const Preview = (props) => {
    console.log(props.contact);
    let {fName, lName,professionalSummary,Email,phone,profession,street,city,state,country,pincode} = props.contact
    return (
        <React.Fragment>
            <div className="fname">{fName}</div>
            <div className="lname">{lName}</div>
            <div className="summary">{professionalSummary}</div>
            <div className="email">{Email}</div>
            <div className="phone">{phone}</div>
            <div className="profession">{profession}</div>
            <div className="street">{street}</div>
            <div className="city">{city}</div>
            <div className="state">{state}</div>
            <div className="country">{country}</div>
            <div className="pincode">{pincode}</div>
        </React.Fragment>
    );
}
 
export default Preview;