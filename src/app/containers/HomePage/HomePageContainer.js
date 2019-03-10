import { connect } from "react-redux";
import { currentUserSelectors as selectors } from "../../selectors";
import { HomePage } from "../../components/HomePage";

const mapStateToProps = state => {
	const currentUser = selectors.getCurrentUser(state);
	return {
		currentUser
	};
};

const HomePageContainer = connect(
	mapStateToProps,
	null
)(HomePage);

export default HomePageContainer;
