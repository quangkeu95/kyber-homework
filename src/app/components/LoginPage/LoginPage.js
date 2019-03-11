import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
// common
import { SingleFormLayout, LoadingDots } from "../Common";

import {
	Form,
	FormGroup,
	FormFeedback,
	Label,
	Input,
	Row,
	Col,
	Button,
	Alert
} from "reactstrap";

const SUCCESS_CODE = 1;
const USER_DO_NOT_EXIST_CODE = 2;
const PASSWORD_INCORRECT_CODE = 3;

const StyledCol = styled(Col)`
	@media (max-width: 576px) {
		text-align: center;
	}
	padding-top: 10px;
	padding-bottom: 15px;
`;

const LoginPage = props => {
	const [formData, changeFormData] = useState({
		username: "",
		password: "",
		isUsernameValid: true,
		isPasswordValid: true
	});

	const { username, password, isUsernameValid, isPasswordValid } = formData;

	const [validateLogin, changeValidateLogin] = useState(null);

	const { listUsers, doLogin, history } = props;

	const onChangeUsername = value => {
		// Reset validate when input change
		changeValidateLogin(null);

		// Username is required
		if (value.length > 0) {
			changeFormData({
				...formData,
				username: value,
				isUsernameValid: true
			});
		} else {
			changeFormData({
				...formData,
				username: value
			});
		}
	};

	const onChangePassword = value => {
		// Reset validate when input change
		changeValidateLogin(null);

		// Password is required
		if (value.length > 0) {
			changeFormData({
				...formData,
				password: value,
				isPasswordValid: true
			});
		} else {
			changeFormData({
				...formData,
				password: value
			});
		}
	};

	const onLogin = () => {
		if (username.length === 0) {
			changeFormData({
				...formData,
				isUsernameValid: false
			});
			return;
		}
		if (password.length === 0) {
			changeFormData({
				...formData,
				isPasswordValid: false
			});
			return;
		}

		const isUsernameCorrect =
			listUsers.filter(item => item.username === username).length > 0;

		const foundTarget = listUsers.filter(
			item => item.username === username && item.password === password
		);

		if (isUsernameCorrect && foundTarget.length > 0) {
			changeValidateLogin(SUCCESS_CODE);
			doLogin(foundTarget[0]);
			setTimeout(() => {
				history.push("/");
			}, 3000);
		} else if (isUsernameCorrect === false) {
			changeValidateLogin(USER_DO_NOT_EXIST_CODE);
		} else if (foundTarget.length <= 0) {
			changeValidateLogin(PASSWORD_INCORRECT_CODE);
		}
	};

	return (
		<SingleFormLayout className="pt-3">
			<Form>
				<FormGroup>
					<Label>Username</Label>
					<Input
						type="text"
						placeholder="Username..."
						valid={username.length > 0 && isUsernameValid}
						invalid={
							validateLogin === USER_DO_NOT_EXIST_CODE ||
							!isUsernameValid
						}
						value={username}
						onChange={event => onChangeUsername(event.target.value)}
					/>
					{username.length > 0 &&
						validateLogin === USER_DO_NOT_EXIST_CODE && (
							<FormFeedback>
								Username does not exist!!
							</FormFeedback>
						)}
					{username.length === 0 && (
						<FormFeedback>Please input username!</FormFeedback>
					)}
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input
						type="password"
						placeholder="Password..."
						valid={password.length > 0 && isPasswordValid}
						invalid={
							validateLogin === PASSWORD_INCORRECT_CODE ||
							!isPasswordValid
						}
						value={password}
						onChange={event => onChangePassword(event.target.value)}
					/>
					{password.length > 0 &&
						validateLogin === PASSWORD_INCORRECT_CODE && (
							<FormFeedback>Incorrect password!!</FormFeedback>
						)}
					{password.length === 0 && (
						<FormFeedback>Please input password!</FormFeedback>
					)}
				</FormGroup>
			</Form>

			<Row>
				<StyledCol xs={12} sm={4}>
					<Button color="primary" className="px-3" onClick={onLogin}>
						Login
					</Button>
				</StyledCol>
				<StyledCol xs={12} sm={8}>
					<span>Don't have an account?</span>
					<Link to="/signup">&nbsp;Register now</Link>
				</StyledCol>
			</Row>

			{/* Alert */}
			<div>
				<Alert
					color="success"
					isOpen={validateLogin === SUCCESS_CODE}
					// toggle={() => changeValidateLogin(null)}
				>
					<span>
						Login success! Redirect to home page in a few seconds.
					</span>
					<LoadingDots className="text-center" />
					{/* <Link to="/">&nbsp;Click here to return home page.</Link> */}
				</Alert>
				{/* <Alert
				color="danger"
				isOpen={validateLogin === USER_DO_NOT_EXIST_CODE}
				toggle={() => changeValidateLogin(null)}
			>
				<span>Username does not exist!!</span>
			</Alert>
			<Alert
				color="danger"
				isOpen={validateLogin === PASSWORD_INCORRECT_CODE}
				toggle={() => changeValidateLogin(null)}
			>
				<span>Password is incorrect!!</span>
			</Alert> */}
			</div>
		</SingleFormLayout>
	);
};

export default withRouter(LoginPage);
