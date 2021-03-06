import { useStore } from "react-redux";
import { initialState } from "../Reducers/initialState";

export const login = (userDetails) => {
  return (dispatch,getState,{getFirebase,getFirestore}) => {
    // !now we can do our async tasks here because dispatch is sync function and it gets called 
    // !when the file compiles
    let guid;
    let guser;
    let firebase = getFirebase();         //auth functions
    let db = getFirestore();
    firebase.auth().signInWithEmailAndPassword(userDetails.email,userDetails.pw).then(obj => {
      // console.log(obj.user);
      guid = obj.user.uid;
      guser = obj.user

      return Promise.all([db.collection("users").doc(guid).get(),db.collection("resumes").doc(guid).get() ]);
    })
    .then((combinedUsersAndResumes)=> {
      let userDoc = combinedUsersAndResumes[0];
      let resumeDoc = combinedUsersAndResumes[1];
      if(!userDoc.data()){
        db.collection("users").doc(guid).set({
          email : guser.email
        })
      }
      if(!resumeDoc.data()){
        db.collection("resumes").doc(guid).set(initialState)
      }
    })
    .then(() => {
      dispatch({ type: "LOGIN", userDetails: userDetails })   
    })
    .catch(err => {

      dispatch({type: "LOGIN_FAILED", error: err.message})
      // console.log(err.message);
    })
  }
}

export const logout = () => {
  return (dispatch,getState,{getFirebase,getFirestore}) => {
    let firebase = getFirebase();
    firebase.auth().signOut().then(obj => {
      console.log(obj);
      dispatch({ type: "LOGOUT" }) 
    })
    .catch(err => {
      // console.log(err.message);
      dispatch({type : "LOGOUT_FAILED", error : err.message})
    })
  }
}

export const signup = (userDetails) => {
  return (dispatch,getState,{getFirebase,getFirestore}) => {
    // console.log(userDetails);
    let firebase = getFirebase();
    let db = getFirestore();
    let uid;

    firebase.auth().createUserWithEmailAndPassword(userDetails.emailRegister,userDetails.pwRegister).then(obj => {
      // console.log(obj.user);
      // dispatch
      uid = obj.user.uid;
      return db.collection("users").doc(obj.user.uid).set({
        firstName : userDetails.fname,
        lastName : userDetails.lname,
        email: userDetails.emailRegister,
      })

    })
    .then(obj => {
      // console.log(obj);
      return db.collection("resumes").doc(uid).set({
        ...initialState
      })
    })
    .then(() => {
      console.log(`user created successfully`);
      dispatch({type: "SIGNUP_SUCCESS"});
    })
    .catch(err => {
      dispatch({type:"SIGNUP_FAILED", error : err.message})
    })
  }
}