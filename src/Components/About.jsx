import React, { Component } from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-content">
      <div className="content">
        <p>
          Do you have any comments or questions? Our team will be happy to
          assist you.
        </p>
        <p>Send us a message.</p>
        <p id="highlight">support@test.com</p>
        <p>
          We are here to answer any questions regarding our resume generator, do
          not hesitate to contact us for any reason. We will respond in less
          than 24 hours from receipt of the email. Thanks for trusting us.
        </p>
      </div>
      <div className="support-img">
          <img src="support.png" alt="support"/>
      </div>
    </div>
  );
};

export default About;
