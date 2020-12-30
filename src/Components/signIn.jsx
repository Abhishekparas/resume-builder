import React, { Component } from "react";
import "./signIn.css";
import { connect } from "react-redux";
import { auth, provider } from "../firebase/fbConfig";
import { login } from "../actions/authActions";
import { Link } from "react-router-dom";

// const handlelogin = (login, e) => {
//   e.preventDefault();
//   // console.log(auth.currentUser);
//   // login(userDetails);

//   // auth.signOut();

//   // auth.signInWithPopup(provider).then((user) => {
//   //     // console.log(user);
//   //     let {displayName,email} = user.user;
//   //     let userDetails = {
//   //         displayName,
//   //         email
//   //     }
//   //     login(userDetails);
//   // }).catch((error) => {
//   //     console.log(error);
//   // })
//   let user = {
//     name: "abhishek",
//   };
//   login(user);
// };

class Sign extends Component {
  state = {
    email: "",
    pw: ""
  };

  onChangeHandler = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    this.setState({
      ...this.state,
      [id]: value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="login">
        <div className="form-div">
          <form>
            <h1 id="heading">Sign In</h1>
            <div className="email-div">
              <input type="email" id="email" placeholder="Email" value={this.state.email} onChange={(e) => { this.onChangeHandler(e) }} />
            </div>

            <div className="password-div">
              <input type="password" id="pw" placeholder="Password" value={this.state.pw} onChange={(e) => { this.onChangeHandler(e) }} />
            </div>
            <div className="a-and-button">
              <a href="#" id="forget">
                Forgot your password?
            </a>
              <button type="submit" id="submit-btn" onClick={(e) => { this.onSubmitHandler(e) }}>
                SIGN IN
            </button>
            </div>
          </form>
        </div>
        <div className="form-div-2">
          <div className="form-div-2-content">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start building your resume</p>
            <Link id="remove-under" to="/register">
              <div id="ghost-1">SIGN UP</div>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.auth.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userDetails) => {
      dispatch(login(userDetails));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sign);
