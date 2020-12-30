import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { updateTheState } from "../actions/stateUpdationActions";
import "./landing.css";

class Landing extends Component {
    state = {};

    getStartedHandler = (e) => {
        e.preventDefault();
        // console.log(this.props);
        let uid = this.props.firebaseAuth.uid;
        let data = this.props.firebaseData.resumes[uid];
        // console.log(uid,data);
        this.props.setTheState(data);
        this.props.history.push("/templates");
    }

    render() {
        return (
            <div className="landing-content">
                <h2 id="heading">Create a resume that stands out</h2>
                <p id="p-tag">
                    Create a resume that perfectly describes your skills and match job
                    profile
                </p>
                <button id="landing-btn" onClick={(e) => { this.getStartedHandler(e) }}>Get started for free</button>
                <div className="landing-img">
                    <img src="landing.png" alt="landing" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firebaseAuth: state.firebase.auth,
        firebaseData: state.firestore.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTheState: (wholeState) => { dispatch(updateTheState(wholeState)) }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{ collection: "resumes" }]))(Landing);
