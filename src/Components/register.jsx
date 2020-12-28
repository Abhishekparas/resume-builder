import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/authActions";
import "./Register.css";

class Register extends Component {
  state = {
    fName: "",
    lName: "",
    email : "",
    pw : "",
  };

  onChangeHandler = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    this.setState({
        ...this.state,
        [id] : value
    })
  }

  onSignUpHandler  = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div className="register">
        <div className="form-div">
          <form>
            <h1 id="heading">Enter your details</h1>

            <div className="email-div">
              <label htmlFor="fName" id="for-fName">
                First Name
              </label>
              <input type="text" id="fName" value = {this.state.fName} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>

            <div className="email-div">
              <label htmlFor="lName" id="for-lName">
                Last Name
              </label>
              <input type="text" id="lName" value = {this.state.lName} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>

            <div className="email-div">
              <label htmlFor="email" id="for-email">
                E-mail
              </label>
              <input type="email" id="email" value = {this.state.email} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>

            <div className="password-div">
              <label htmlFor="pw" id="for-pw">
                Password
              </label>
              <input type="password" id="pw" value = {this.state.pw} onChange = {(e) => {this.onChangeHandler(e)}} />
            </div>

            <button type="submit" id="submit-btn" onClick = {(e) => {this.onSignUpHandler(e)}}>
              Register
            </button>
          </form>
          <div className="temp-div">
            {this.props.message && <span>{this.props.message}</span>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        message : state.auth.message
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (userDetails) => {dispatch(signup(userDetails))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
