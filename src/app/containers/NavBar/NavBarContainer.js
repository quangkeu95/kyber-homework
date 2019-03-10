import { connect } from "react-redux";
import { currentUserSelectors as selectors } from "../../selectors";
import { currentUserActions as actions } from "../..//actions";
import { NavBar } from "../../components/NavBar";

const mapStateToProps = state => {
	const currentUser = selectors.getCurrentUser(state);
	return {
		currentUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		doLogout: () => dispatch(actions.doLogout())
	};
};

const NavBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);

export default NavBarContainer;
