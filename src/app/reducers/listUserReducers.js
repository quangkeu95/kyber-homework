import { listUserTypes as types } from "../types";

const listUserReducers = (state = [], action) => {
	switch (action.type) {
		case types.REGISTER_USER: {
			return [...state, action.payload];
		}
		case types.UPDATE_USER_IN_LIST: {
			if (state.length > 0) {
				return state.map(item => {
					if (item.id !== action.id) {
						return item;
					}

					return {
						...item,
						name: action.name,
						age: action.age
					};
				});
			} else {
				return state;
			}
		}

		default:
			return state;
	}
};

export default listUserReducers;
