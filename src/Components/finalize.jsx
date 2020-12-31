import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Preview from "./preview";
import "./finalize.css";
import { skinCodes } from "../constant/skinCodes";
import { updateSkin } from "../actions/documentActions";
import Pdf from "react-to-pdf";

const ref = React.createRef();

class Finalize extends Component {
  state = {
    contact: this.props.contact,
    education: this.props.education,
    skinCode: this.props.skinCode,
  };


  handleSkinSelect = (value) => {
    this.props.changeSkinCode(value);
  }

  // downloadHandler = (e) => {
  //   const str = renderToString(Preview);
  //   const pdf = new jsPDF("p", "mm", "a4");
  //   pdf.fromHTML(str);
  //   pdf.save('pdf');
  // }

  componentWillReceiveProps(newProps) {
    this.setState({
      skinCode: newProps.skinCode
    })
  }

  render() {
    let { contact, education, skinCode } = this.state;
    return (
      <React.Fragment>
        <div className="finalize">
          <div className="final-preview">
            <Preview contact={contact} education={education} ref={ref}></Preview>
          </div>
          <Pdf targetRef={ref} filename="resume.pdf">
            {({ toPdf }) =><button id="download" onClick={toPdf}> <img src="cloud-computing.png" alt="" /></button> }
          </Pdf>
          {/* <button id="download" onClick={(e) => { this.downloadHandler(e) }}> <img src="cloud-computing.png" alt="" /></button> */}

          <div className="finalize-img">
            {skinCodes.map((skin) => {
              let className = skin.value == skinCode ? "selected-skin" : "";
              return (
                <div key={skin.id} className={`template ${className}`}>
                  <img src={`${skin.value}.svg`} className="special" alt="" />
                  <button
                    className="template-btn"
                    onClick={() => this.handleSkinSelect(skin.value)}
                  >
                    USE TEMPLATE
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetails,
    education: state.educationDetails,
    skinCode: state.document.skinCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSkinCode: (skinCode) => { dispatch(updateSkin(skinCode)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finalize);
