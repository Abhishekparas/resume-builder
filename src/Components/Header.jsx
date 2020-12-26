import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const handleLogout = (logout) => {
  logout();
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
        {auth ? (
          <ul id="list-links">
            <li>
              <Link to="/templates">
                Resume Templates
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                About Us
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" onClick = {() => {handleLogout(props.logout)}}>
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
          <ul id="list-links">
            <li>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </li>
            <li>
              <Link to="/signIn">
                <button className="btn-in">Sign In</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                About Us
                <div className="parent-design hide">
                  <div className="design"></div>
                  <div className="design"></div>
                  <div className="design"></div>
                </div>
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
    auth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout : () => {dispatch({type : "LOGOUT"})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
