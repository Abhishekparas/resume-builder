import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSkin } from "../actions/documentActions";
import { skinCodes } from "../constant/skinCodes";
import "./templates.css";

class Template extends Component {
  state = {
    skinCode : this.props.skinCode
  };
  
  handleSkinSelect = (value) => {
    this.props.changeSkinCode(value);
    this.props.history.push("/contact");
  }

  componentWillReceiveProps(newProps){
    this.setState({
      skinCode : newProps.skinCode
    })
  }


  render() {
    let skinCode = this.state.skinCode;
    return (
      <div className="template-content">
        <div className="template-header">
          <h2 id="template-heading">Select a resume template to get started</h2>
          <p id="template-p">
            you will be able to edit and change this template later!
          </p>
        </div>

        <div className="template-img">
          {skinCodes.map((skin) => {
            let className = skin.value == skinCode ? "selected-skin" : "";
            return (
              <div key={skin.id} className={`template ${className}`}>
                <img src={`${skin.value}.svg`} className="special" alt="" />
                <button className="template-btn" onClick={() => this.handleSkinSelect(skin.value)}>USE TEMPLATE</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skinCode: state.document.skinCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    changeSkinCode : (skinCode) => {dispatch(updateSkin(skinCode))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Template);
