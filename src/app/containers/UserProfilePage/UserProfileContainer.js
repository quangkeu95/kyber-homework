import { connect } from "react-redux";
import { currentUserSelectors as selectors } from "../../selectors";
import { currentUserOperations as operations } from "../../operations";
import { UserProfilePage } from "../../components/UserProfilePage";
import { userInfo } from "os";

const mapStateToProps = state => {
	const currentUser = selectors.getCurrentUser(state);
	return { currentUser };
};

const mapDispatchToProps = {
	doEdit: operations.doEditUser
};

const UserProfilePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfilePage);

export default UserProfilePageContainer;
