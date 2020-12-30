import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import Preview from "./preview";
import { connect } from 'react-redux'
import { updateContact } from "../actions/contactActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Contact extends Component {
  state = {
    contact: this.props.contact
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let Value = e.target.value;
    this.setState({
      contact: {
        ...this.state.contact,
        [id]: Value
      }
    });
  };

  onSubmitContactHandler = () => {
    this.props.updateContactDetails(this.state.contact);
    this.props.history.push("/education");
  };

  componentDidMount() {
    console.log(`Inside component did mount`);
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(`Inside component did update`);
    console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    console.log(`Inside component will receive props`);
    console.log(newProps);
    console.log(this.props);
  }

  render() {
    let { contact } = this.state;
    return (
      <div className="contact">
        <div className="contact-form">
          <div className="contact-heading">
            <h1>Personal Details</h1>
          </div>
          <div className="contact-form-details">
            <div className="input-group">
              <label htmlFor="fName" className="change-color">First Name</label>
              <input
                type="text"
                id="fName"
                value={contact.fName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lName" className="change-color">Last Name</label>
              <input
                type="text"
                id="lName"
                value={contact.lName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group extend">
              <label htmlFor="professionalSummary" className="change-color">Professional Summary</label>
              <input
                type="text"
                id="professionalSummary"
                value={contact.professionalSummary}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Email" className="change-color">Email</label>
              <input
                type="text"
                id="Email"
                value={contact.Email}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone" className="change-color">Phone</label>
              <input
                type="text"
                id="phone"
                value={contact.phone}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="profession" className="change-color">Profession</label>
              <input
                type="text"
                id="profession"
                value={contact.profession}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="street" className="change-color">Street</label>
              <input
                type="text"
                id="street"
                value={contact.street}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="city" className="change-color">City</label>
              <input
                type="text"
                id="city"
                value={contact.city}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="state" className="change-color">State</label>
              <input
                type="text"
                id="state"
                value={contact.state}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="country" className="change-color">Country</label>
              <input
                type="text"
                id="country"
                value={contact.country}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="pincode" className="change-color">Pincode</label>
              <input
                type="text"
                id="pincode"
                value={contact.pincode}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="buttons-div">
              <div className="back">
                <Link to="/templates">
                  <button className="btn-back"><i class="fas fa-arrow-left"></i>Back</button>
                </Link>
              </div>
              <div className="next">
                <button
                  className="btn"
                  onClick={this.onSubmitContactHandler}
                >
                  Next<i class="fas fa-arrow-right"></i>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="preview-form">
          <Preview contact={contact} education={this.props.education}></Preview>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetails,
    education: state.educationDetails
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateContactDetails: (contactDetails) => { dispatch(updateContact(contactDetails)) }
  }
}





export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{ collection: "resumes" }]))(Contact);
