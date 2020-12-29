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
              <Link to="/templates" id="something-1">
                Resume Templates
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about" id="something-2">
                About Us
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" onClick = {() => {handleLogout(props.logout)}} id="something-3">
                Logout
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
              </Link>
            </li>
          </ul>
        ) : (
          <ul id="list-links-2">
            <li>
              <Link to="/about" id="something-4">
                About Us
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/signIn" id="something-5">
                <button className="btn-in">Sign In</button>
              </Link>
            </li>
            <li>
              <Link to="/register" id="something-6">
                <button className="btn">Register</button>
              </Link>
            </li>
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
    logout : () => {dispatch(logout())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
