import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/authActions";
import "./Register.css";

class Register extends Component {
  state = {
    fname: "",
    lname: "",
    emailRegister: "",
    pwRegister: "",
  };

  onChangeHandler = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    this.setState({
      ...this.state,
      [id]: value
    })
  }

  onSignUpHandler = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div className="register">
        <div className="form-div-3">
          <div className="form-div-2-content">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <Link to="/signIn" id="remove-under">
              <div id="ghost-1">SIGN IN</div>
            </Link>
          </div>
        </div>
        <div className="form-div-register">
          <form>
            <h1 id="heading">Create Account</h1>

            <div className="email-div-register">
              <input type="text" id="fname" placeholder="First Name" value={this.state.fName} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>

            <div className="email-div-register">
              <input type="text" id="lname" placeholder="Last Name" value={this.state.lName} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>

            <div className="email-div-register">
              <input type="email" id="emailRegister" placeholder="Email" value={this.state.emailRegister} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>

            <div className="password-div-register">
              <input type="password" id="pwRegister" placeholder="Password" value={this.state.pwRegister} onChange = {(e) => {this.onChangeHandler(e)}}/>
            </div>
            <button type="submit" id="submit-btn-register" onClick = {(e) => {this.onSignUpHandler(e)}}>
              SIGN UP
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
    message: state.auth.message
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (userDetails) => { dispatch(signup(userDetails)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
