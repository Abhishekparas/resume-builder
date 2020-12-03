import React, { Component } from "react";
import { connect } from "react-redux";
import "./preview.css";
import Skin1 from "./skins/skin1";
import Skin2 from "./skins/skin2";
import Skin4 from "./skins/skin4";

const Preview = (props) => {
  // console.log(props.contact);

  let skinCode = props.skinCode;

  return (
    <React.Fragment>
      {skinCode == "skin1" && <Skin1 contact={props.contact} education={props.education}></Skin1>}
      {skinCode == "skin2" && <Skin2 contact={props.contact} education={props.education}></Skin2>}
      {skinCode == "skin4" && <Skin4 contact={props.contact} education={props.education}></Skin4>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return{
    skinCode : state.document.skinCode
  }
}


export default connect(mapStateToProps)(Preview);
