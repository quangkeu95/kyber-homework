import { connect } from "react-redux";
import { currentUserActions as actions } from "../../actions";
import { listUserSelectors as selectors } from "../../selectors";
import { LoginPage } from "../../components/LoginPage";

const mapStateToProps = state => {
	const listUsers = selectors.getListUsers(state);
	return {
		listUsers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		doLogin: userInfo => dispatch(actions.doLogin(userInfo))
	};
};

const LoginPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage);

export default LoginPageContainer;
