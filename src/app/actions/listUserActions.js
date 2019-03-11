import { listUserTypes as types } from "../types";

import uuid4 from "uuid4";

const registerUser = userInfo => {
	const { username, password } = userInfo;

	const user = {
		id: uuid4(),
		username,
		password,
		name: "",
		age: ""
	};

	return {
		type: types.REGISTER_USER,
		payload: user
	};
};

const updateUserInList = userInfo => {
	return {
		type: types.UPDATE_USER_IN_LIST,
		payload: userInfo
	};
};

export default { registerUser, updateUserInList };
