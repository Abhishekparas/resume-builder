import { authReducer } from "./authReducer";
import { contactReducer } from "./contactReducer";
import { documentReducer } from "./documentReducer";
import { educationReducer } from "./educationReducer";
import {initialState} from "./initialState"
const {combineReducers} = require("redux");
// export function myReducer(state = initialState,action){
//     return state;
// }

export const myReducer = combineReducers({
    auth: authReducer,
    contactDetails: contactReducer,
    educationDetails: educationReducer,
    document: documentReducer
})
