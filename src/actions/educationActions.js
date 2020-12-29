export const updateEducation = (educationDetails) => {
  return (dispatch,getState,{getFirebase,getFirestore}) => {

    let db = getFirestore();
    let uid = getState().firebase.auth.uid;
    db.collection("resumes").doc(uid).set({
      educationDetails: educationDetails
    }, { merge: true })          //this ensures that only contact details get updated and others things such as education details remains unchanged
    .then(() => {
      dispatch({type : "UPDATE_EDUCATION" ,educationDetails : educationDetails})
    })
    .catch(err=>{
      dispatch({type: "FAILED_UPDATE_EDUCATION", error : err.message})
    })
  }
}