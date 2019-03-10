import { currentUserTypes as types } from "../types";

const doLogin = userInfo => {
	return {
		type: types.USER_LOGIN,
		payload: userInfo
	};
};

const doLogout = () => {
	return {
		type: types.USER_LOGOUT
	};
};

export default {
	doLogin,
	doLogout
};
