import React from "react";
import PropTypes from "prop-types";

const HomePage = props => {
	const { currentUser } = props;

	return (
		<div className="text-center py-3">
			<h1>Welcome{currentUser ? `, ${currentUser.username}` : ""}</h1>
		</div>
	);
};

HomePage.propTypes = {
	currentUser: PropTypes.object
};

export default HomePage;
