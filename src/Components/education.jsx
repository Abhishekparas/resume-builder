import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./education.css";
import Preview from "./preview";

class Education extends Component {
  state = {
    contact: this.props.contact,
    education: this.props.education,
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let id = e.target.id;
    this.setState({
      education : {
        ...this.state.education,
        [id] : value
      }
    })
  };
  onSubmitHandler = () => {
    this.props.history.push("/finalize");
    this.props.updateEducationDetails(this.state.education);
  };

  render() {
    let { contact, education } = this.state;
    return (
      <div className="education-details">
        <div className="education-1">
          <div className="education-heading">
            <h1>Educational Section</h1>
          </div>

          <div className="input-group-div">
            <div className="input-group-education">
              <label htmlFor="">College Name</label>
              <input
                type="text"
                id="collegeName"
                value={education.collegeName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="input-group-education">
              <label htmlFor="">Degree</label>
              <input
                type="text"
                id="degree"
                value={education.degree}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="input-group-education">
              <label htmlFor="">CGPA</label>
              <input
                type="text"
                id="cgpa"
                value={education.cgpa}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="input-group-education">
              <label htmlFor="">City</label>
              <input
                type="text"
                id="eduCity"
                value={education.eduCity}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="input-group-education">
              <label htmlFor="">State</label>
              <input
                type="text"
                id="eduState"
                value={education.eduState}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="input-group-education">
              <label htmlFor="">Graduation Month</label>
              <input
                type="text"
                id="graduationMonth"
                value={education.graduationMonth}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="input-group-education extend">
              <label htmlFor="">Graduation Year</label>
              <input
                type="text"
                id="graduationYear"
                value={education.graduationYear}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="next-btn extend">
                <button onClick={this.onSubmitHandler}>Next</button>
            </div>
            <div className="back-btn extend">
              <Link to="/contact">
                <button>Back</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="preview-form">
          <div className="preview-heading">
            <h1>Preview</h1>
          </div>
          <Preview contact={contact} education={education}></Preview>
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

const mapDispatchToProps = (dispatch) => {
  return{
    updateEducationDetails : (educationDetails) => {dispatch({type : "UPDATE_EDUCATION" ,educationDetails : educationDetails})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education);
