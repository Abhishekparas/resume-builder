import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import Preview from "./preview";
import {connect} from 'react-redux'

class Contact extends Component {
  state = {
    contact: {
      fName: "",
      lName: "",
      professionalSummary: "",
      Email: "",
      phone: "",
      profession: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
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
    this.props.history.push("/education");
  };

  render() {
    let { contact } = this.props;
    return (
      <div className="contact">
        <div className="contact-form">
          <div className="contact-heading">
            <h1>Personal Details</h1>
          </div>
          <div className="contact-form-details">
            <div className="input-group">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                id="fName"
                value={contact.fName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                id="lName"
                value={contact.lName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group extend">
              <label htmlFor="professionalSummary">Professional Summary</label>
              <input
                type="text"
                id="professionalSummary"
                value={contact.professionalSummary}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                id="Email"
                value={contact.Email}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                value={contact.phone}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                id="profession"
                value={contact.profession}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                value={contact.street}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={contact.city}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={contact.state}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={contact.country}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                value={contact.pincode}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="next extend">
              <button
                className="btn-next"
                onClick={this.onSubmitContactHandler}
              >
                Next
              </button>
            </div>
            <div className="back extend">
              <Link to="/templates">
                <button className="btn-back">Back</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="preview-form">
          <div className="preview-heading">
            <h1>Preview</h1>
          </div>
          <Preview contact={this.props.contact}></Preview>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact : state.contactDetails
  }
};

export default connect(mapStateToProps)(Contact);
