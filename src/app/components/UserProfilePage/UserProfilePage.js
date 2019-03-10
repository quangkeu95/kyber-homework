import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { SingleFormLayout } from "../Common";
import styled from "styled-components";

const CenteredContainer = styled.div`
	@media (max-width: 540px) {
		text-align: center;
	}
	margin: 10px 0;
`;

const UserProfilePage = props => {
	const { currentUser } = props;
	return (
		<SingleFormLayout>
			<Row>
				<Col xs={12} sm={4}>
					<CenteredContainer>
						<i className="far fa-user-circle fa-7x" />
					</CenteredContainer>
				</Col>
				<Col xs={12} sm={8}>
					<CenteredContainer>
						<h2>{currentUser.username}</h2>
						<hr />
						<p>{`Name: ${
							currentUser.name.length > 0
								? currentUser.username
								: "<Not Provide>"
						}`}</p>
						<p>{`Age: ${
							currentUser.age ? currentUser.age : "<Not Provide>"
						}`}</p>
					</CenteredContainer>
				</Col>
			</Row>
		</SingleFormLayout>
	);
};

UserProfilePage.propTypes = {
	currentUser: PropTypes.object
};

export default UserProfilePage;
