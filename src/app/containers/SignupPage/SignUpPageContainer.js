import { connect } from "react-redux";
import { listUserActions as actions } from "../../actions";
import { listUserOperations as operations } from "../../operations";
import { listUserSelectors as selectors } from "../../selectors";
import { SignupPage } from "../../components/SignupPage";

const mapStateToProps = state => {
	const listUsers = selectors.getListUsers(state);
	return {
		listUsers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		registerUser: userInfo => dispatch(actions.registerUser(userInfo))
	};
};

const SignupPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupPage);

export default SignupPageContainer;
