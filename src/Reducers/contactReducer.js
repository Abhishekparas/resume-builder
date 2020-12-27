import { initialState } from "./initialState";

export const contactReducer = (state = initialState.contactDetails, action) => {

  if (action.type == "UPDATE_CONTACT") {
    return {
        ...action.contactDetails
    }
  }
  return state;
}