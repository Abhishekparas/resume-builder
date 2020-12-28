export const updateEducation = (educationDetails) => {
  return (dispatch,getState) => {
    dispatch({type : "UPDATE_EDUCATION" ,educationDetails : educationDetails})
  }
}