import { listUserTypes as types } from "../types";

const listUserReducers = (state = [], action) => {
	switch (action.type) {
		case types.REGISTER_USER: {
			return [...state, action.payload];
		}

		default:
			return state;
	}
};

export default listUserReducers;
