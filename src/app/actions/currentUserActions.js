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

const editUser = userInfo => {
	return {
		type: types.USER_EDIT,
		payload: userInfo
	};
};

export default {
	doLogin,
	doLogout,
	editUser
};
