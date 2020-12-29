export const updateTheState = (wholeState) => {
  return (dispatch,getState) => {

    dispatch({ type: "UPDATE_CONTACT", contactDetails: wholeState.contactDetails }) 

    dispatch({ type: "CHANGE_SKIN", skinCode: wholeState.skinCode }) 

    dispatch({type : "UPDATE_EDUCATION" ,educationDetails : wholeState.educationDetails})
  }
}