export const updateSkin = (skinCode) => {
  return (dispatch,getState,{getFirebase,getFirestore}) => {
    let db = getFirestore();
    let uid = getState().firebase.auth.uid;
    db.collection("resumes").doc(uid).set({
      document : {
        skinCode : skinCode
      }
    },{merge: true})
    .then(() => {
      dispatch({ type: "CHANGE_SKIN", skinCode: skinCode }) 
    })
    .catch(err => {
      dispatch({type: "FAILED_CHANGE_SKIN_CODE", error: err.message})
    })
  }
}