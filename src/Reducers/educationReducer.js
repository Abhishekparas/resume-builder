import { initialState } from "./initialState";

export const educationReducer = (state = initialState.educationDetails, action) => {
  if (action.type == "UPDATE_EDUCATION") {
    return {
      ...action.educationDetails
    }
  }
  else if(action.type == "FAILED_UPDATE_EDUCATION"){
    console.log(action.error);
    return state;
  }
  return state;
}
