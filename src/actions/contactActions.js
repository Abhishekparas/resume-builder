export const updateContact = (contactDetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let db = getFirestore();
    let uid = getState().firebase.auth.uid;
    db.collection("resumes").doc(uid).set({
      contactDetails: contactDetails
    }, { merge: true })          //this ensures that only contact details get updated and others things such as education details remains unchanged
    .then(() => {
      dispatch({ type: "UPDATE_CONTACT", contactDetails: contactDetails })
    })
    .catch(err=>{
      dispatch({type: "FAILED_UPDATE_CONTACT", error : err.message})
    })
  }
}