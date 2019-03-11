import { currentUserTypes as types } from "../types";

const currentUserReducer = (state = null, action) => {
	switch (action.type) {
		case types.USER_LOGIN: {
			return {
				...action.payload
			};
		}
		case types.USER_LOGOUT: {
			return null;
		}
		case types.USER_EDIT: {
			return {
				...state,
				name: action.name,
				age: action.age
			};
		}
		default:
			return state;
	}
};

export default currentUserReducer;
