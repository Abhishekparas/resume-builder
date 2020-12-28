import { authReducer } from "./authReducer";
import { contactReducer } from "./contactReducer";
import { documentReducer } from "./documentReducer";
import { educationReducer } from "./educationReducer";
import {initialState} from "./initialState"
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore"
const {combineReducers} = require("redux");


export const myReducer = combineReducers({
    auth: authReducer,
    contactDetails: contactReducer,
    educationDetails: educationReducer,
    document: documentReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})