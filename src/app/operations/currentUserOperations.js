import { currentUserActions, listUserActions } from "../actions";

const doEditUser = userInfo => {
	return dispatch => {
		dispatch(currentUserActions.editUser(userInfo));
		dispatch(listUserActions.updateUserInList(userInfo));
	};
};

export default { doEditUser };
