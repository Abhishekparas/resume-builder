import React, { Component } from "react";
import "./signIn.css";
import { connect } from "react-redux";
import { auth, provider } from "../firebase/fbConfig";
import { login } from "../actions/authActions";

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
        [id] : value
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
            {/* <React.Fragment>  */}
            <h1 id="heading">Enter your details</h1>
            <div className="email-div">
              <label htmlFor="email" id="for-email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={(e) => {this.onChangeHandler(e)}}
              />
            </div>

            <div className="password-div">
              <label htmlFor="pw" id="for-pw">
                Password
              </label>
              <input type="password" id="pw" value={this.state.pw} onChange = {(e) => {this.onChangeHandler(e)}} />
            </div>
            {/* </React.Fragment> */}
            <button
              type="submit"
              id="submit-btn"
              onClick={(e) => {
                this.onSubmitHandler(e);
              }}
            >
              Login
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
