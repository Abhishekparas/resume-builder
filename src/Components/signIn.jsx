import React, { Component } from 'react';
import "./signIn.css";

const Sign = () => {
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
                    <button type="submit" id="submit-btn">Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Sign;