import React, { Component } from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div className="register">
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

                    <div className="confirm-div">
                        <label htmlFor="confirm-pw" id="for-confirm-pw">Confirm Password</label>
                        <input type="password" id="confirm-pw"/>
                    </div>
                    {/* </React.Fragment> */}
                    <button type="submit" id="submit-btn">Register</button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;