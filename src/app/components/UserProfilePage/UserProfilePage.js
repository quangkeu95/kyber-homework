import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { SingleFormLayout } from "../Common";
import styled from "styled-components";

const CenteredContainer = styled.div`
	@media (max-width: 576px) {
		text-align: center;
	}
	margin: 10px 0;
`;

const UserInfoPanel = styled.div`
	margin-top: 10px;
`;

const UserProfilePage = props => {
	const { currentUser, doEdit } = props;

	const [isEdit, changeIsEdit] = useState(false);
	const [editForm, changeEditForm] = useState({
		name: currentUser ? currentUser.name : "",
		age: currentUser ? currentUser.age : ""
	});

	const onSaveUserProfile = () => {
		const userInfo = {
			id: currentUser.id,
			name: editForm.name,
			age: editForm.age
		};
		doEdit(JSON.parse(JSON.stringify(userInfo)));
		changeEditForm({
			name: currentUser ? currentUser.name : "",
			age: currentUser ? currentUser.age : ""
		});
		changeIsEdit(false);
	};

	const onCancelEdit = () => {
		changeEditForm({
			name: currentUser ? currentUser.name : "",
			age: currentUser ? currentUser.age : ""
		});
		changeIsEdit(false);
	};

	return (
		<SingleFormLayout>
			<Row>
				<Col xs={12} sm={4}>
					<CenteredContainer>
						<img
							className="img-fluid"
							src={`http://i.pravatar.cc/128?u=${currentUser.id}`}
							alt="user-icon"
						/>
						{/* <i className="far fa-user-circle fa-7x" /> */}
					</CenteredContainer>
				</Col>
				<Col xs={12} sm={8}>
					<CenteredContainer>
						<h2>{currentUser.username}</h2>

						<UserInfoPanel>
							{/* User Info */}
							{!isEdit && (
								<div>
									<p>{`Name: ${
										currentUser.name.length > 0
											? currentUser.name
											: "<Not Provide>"
									}`}</p>
									<p>{`Age: ${
										currentUser.age
											? currentUser.age
											: "<Not Provide>"
									}`}</p>
								</div>
							)}

							{/* User Info Edit */}
							{isEdit && (
								<Form style={{ textAlign: "start" }}>
									<FormGroup row>
										<Label xs={4}>Name</Label>
										<Col xs={8}>
											<Input
												type="text"
												value={editForm.name}
												onChange={event =>
													changeEditForm({
														...editForm,
														name: event.target.value
													})
												}
											/>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label xs={4}>Age</Label>
										<Col xs={8}>
											<Input
												type="number"
												value={editForm.age}
												onChange={event =>
													changeEditForm({
														...editForm,
														age: event.target.value
													})
												}
											/>
										</Col>
									</FormGroup>
								</Form>
							)}

							{/* Button Group */}
							{!isEdit && (
								<Button onClick={() => changeIsEdit(true)}>
									Edit Profile
								</Button>
							)}

							{isEdit && (
								<div>
									<Button
										color="success"
										className="px-3 mr-3"
										onClick={onSaveUserProfile}
									>
										Save
									</Button>
									<Button
										color="secondary"
										className="px-3"
										onClick={onCancelEdit}
									>
										Cancel
									</Button>
								</div>
							)}
						</UserInfoPanel>
					</CenteredContainer>
				</Col>
			</Row>
		</SingleFormLayout>
	);
};

UserProfilePage.propTypes = {
	currentUser: PropTypes.object,
	doEdit: PropTypes.func
};

export default UserProfilePage;
