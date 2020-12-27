import { authReducer } from "./authReducer";
import { contactReducer } from "./contactReducer";
import { documentReducer } from "./documentReducer";
import { educationReducer } from "./educationReducer";
import {initialState} from "./initialState"
const {combineReducers} = require("redux");

export const myReducer = combineReducers({
    auth: authReducer,
    contactDetails: contactReducer,
    educationDetails: educationReducer,
    document: documentReducer
})
