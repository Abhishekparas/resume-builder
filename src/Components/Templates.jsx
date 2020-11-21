import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./templates.css";

const Template = () => {
  return (
    <div className="template-content">
      <div className="template-header">
        <h2 id="template-heading">Select a resume template to get started</h2>
        <p id="template-p">
          You will be able to edit and change this template later!
        </p>
      </div>

      <div className="template-img">
        <div className="img-1">
          <img src="skin1.svg" alt="" />
          <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
        </div>
        <div className="img-2">
          <img src="skin2.svg" alt="" />
          <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
        </div>
        <div className="img-3">
          <img src="skin3.svg" alt="" />
          <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
        </div>
        <div className="img-4">
          <img src="skin4.svg" alt="" />
          <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Template;
