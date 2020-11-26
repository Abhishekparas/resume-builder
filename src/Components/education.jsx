import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./education.css";
import Preview from "./preview";

class Education extends Component {
  state = {};
  render() {
    return (
      <div className="education-details">
        <div className="education-1">
          <div className="education-heading">
            <h1>Educational Section</h1>
          </div>

          <div className="input-group-div">
            <div className="input-group-education">
              <label htmlFor="">College Name</label>
              <input type="text" />
            </div>

            <div className="input-group-education">
              <label htmlFor="">Degree</label>
              <input type="text" />
            </div>

            <div className="input-group-education">
              <label htmlFor="">City/State</label>
              <input type="text" />
            </div>

            <div className="input-group-education">
              <label htmlFor="">Graduation Month</label>
              <input type="text" />
            </div>

            <div className="input-group-education extend">
              <label htmlFor="">Graduation Year</label>
              <input type="text" />
            </div>

            <div className="next-btn extend">
                <button>Next</button>
            </div>
            <div className="back-btn extend">
                <button>Back</button>
            </div>


          </div>
        </div>
        <div className="preview-form">
          <div className="preview-heading">
            <h1>Preview</h1>
          </div>
          <Preview
            contact={this.props.contact}
            education={this.props.education}
          ></Preview>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetails,
    education: state.educationDetails,
  };
};

export default connect(mapStateToProps)(Education);
