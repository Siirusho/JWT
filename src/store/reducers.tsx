import { combineReducers } from "redux";
import listReducer from "./List/_reducer";
import userReducer from "./User/_reducer";

const appReducers = combineReducers({
    listReducer,
    userReducer,
});


export default appReducers;