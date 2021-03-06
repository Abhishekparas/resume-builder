import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase/fbConfig";
import { logout } from "../actions/authActions";



const handleLogout = (logout) => {
  // auth.signOut().then( () => {
  logout();
  // })
}

const Header = (props) => {
  let { auth } = props;
  return (
    <div className="header">
      <div className="header-img">
        <Link to="/">
          <img src="resume.png" alt="" />
        </Link>
      </div>
      <div className="header-links">
        {auth.uid ? (
          <ul id="list-links">
            <li>
              <Link to="/templates" >
                Resume Templates
                {/* <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div> */}
              </Link>
            </li>
            <li>
              <Link to="/about" >
                About Us
                {/* <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div> */}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => { handleLogout(props.logout) }} >
                Logout
                {/* <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div> */}
              </Link>
            </li>
          </ul>
        ) : (
            <ul id="list-links-2">
              <li>
                <Link to="/about">
                  About Us
              </Link>
              </li>
              <div className="something">
                <li>
                  <Link to="/signIn" >
                    <button className="btn-in">Sign In</button>
                  </Link>
                </li>
                <li>
                  <Link to="/register" >
                    <button className="btn">Register</button>
                  </Link>
                </li>

              </div>
            </ul>
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch(logout()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
