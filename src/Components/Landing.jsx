import React, { Component } from 'react'
import "./landing.css"

const Landing = () => {
    return (
        <div className="landing-content">
            <h2 id="heading">Create a resume that stands out</h2>
            <p id="p-tag">Create a resume that perfectly describes your skills and match job profile</p>
            <button id="landing-btn">Get started for free</button>

            <div className="landing-img">
                <img src="landing.png" alt="landing"/>
            </div>
        </div>
    );
}
 
export default Landing;