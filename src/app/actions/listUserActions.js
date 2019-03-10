import { listUserTypes as types } from "../types";

import uuid4 from "uuid4";

const registerUser = userInfo => {
	const { username, password } = userInfo;

	const user = {
		id: uuid4(),
		username,
		password,
		name: "",
		age: null
	};

	return {
		type: types.REGISTER_USER,
		payload: user
	};
};

export default { registerUser };
