import { connect } from "react-redux";
import { currentUserSelectors as selectors } from "../../selectors";
import { UserProfilePage } from "../../components/UserProfilePage";

const mapStateToProps = state => {
	const currentUser = selectors.getCurrentUser(state);
	return { currentUser };
};

const UserProfilePageContainer = connect(
	mapStateToProps,
	null
)(UserProfilePage);

export default UserProfilePageContainer;
