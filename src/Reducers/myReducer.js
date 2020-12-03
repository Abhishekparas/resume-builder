import {initialState} from "./initialState"

export function myReducer(state = initialState,action){
    if(action.type == "UPDATE_CONTACT"){
        return{
            ...state,
            contactDetails : {
                ...action.contactDetails
            }
        }
    }
    if(action.type == "UPDATE_EDUCATION"){
        return{
            ...state,
            educationDetails : {
                ...action.educationDetails
            }
        }
    }
    if(action.type == "CHANGE_SKIN"){
        return{
            ...state,
            document : {
                ...state.document, 
                skinCode : action.skinCode
            }
        }
    }
    return state;
}