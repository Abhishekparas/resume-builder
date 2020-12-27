import React, { Component } from 'react';
import "./signIn.css";
import {connect} from "react-redux";
import { auth, provider } from '../firebase/fbConfig';

const handlelogin = (login,e) => {
    e.preventDefault();
    // console.log(auth.currentUser);
    // login(userDetails);

    // auth.signOut();

    auth.signInWithPopup(provider).then((user) => {
        // console.log(user);
        let {displayName,email} = user.user;
        let userDetails = {
            displayName,
            email
        }
        login(userDetails);
    }).catch((error) => {
        console.log(error);
    })
}

const Sign = (props) => {
    return (
        <div className="login">
            <div className="form-div">
                <form>
                    {/* <React.Fragment>  */}
                    <h1 id="heading">Enter your details</h1>
                    <div className="email-div">
                        <label htmlFor="email" id="for-email">E-mail</label>
                        <input type="email" id="email"/>
                    </div>

                    <div className="password-div">
                        <label htmlFor="pw" id="for-pw">Password</label>
                        <input type="password" id="pw"/>
                    </div>
                    {/* </React.Fragment> */}
                    <button type="submit" id="submit-btn" onClick = {(e) => {handlelogin(props.login,e)}}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
const mapStateToProps = (state) => {
    return{
        auth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login : (userDetails) => {dispatch({type: "LOGIN", userDetails : userDetails})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sign) ;