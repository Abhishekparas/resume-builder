import { initialState } from "./initialState";

export const documentReducer = (state = initialState.document, action) => {
  if (action.type == "CHANGE_SKIN") {
    return {
      // document: {
        ...state,
        skinCode: action.skinCode
      // }
    }
  }
  return state;
}
