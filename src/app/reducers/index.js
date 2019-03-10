import { combineReducers } from "redux";

import listUserReducers from "./listUserReducers";
import currentUserReducer from "./currentUserReducers";

const rootReducer = combineReducers({
	listUsers: listUserReducers,
	currentUser: currentUserReducer
});

export default rootReducer;
