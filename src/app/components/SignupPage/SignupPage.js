import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { debounce } from "lodash";

import {
	Button,
	Row,
	Col,
	Form,
	FormGroup,
	FormFeedback,
	Input,
	Label,
	Alert
} from "reactstrap";
// common
import { SingleFormLayout } from "../Common";

const StyledCol = styled(Col)`
	@media (max-width: 540px) {
		text-align: center;
	}
	padding-top: 10px;
	padding-bottom: 15px;
`;

const SignupPage = props => {
	const [formData, changeFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		isUsernameValid: true,
		isUsernameExist: false,
		isPasswordValid: true,
		isConfirmPasswordValid: true,
		isConfirmPasswordMatch: true
	});

	const {
		username,
		password,
		confirmPassword,
		isUsernameExist,
		isUsernameValid,
		isPasswordValid,
		isConfirmPasswordValid,
		isConfirmPasswordMatch
	} = formData;

	const [isRegisterSuccess, changeIsRegisterSuccess] = useState(null);

	const { registerUser, listUsers } = props;

	const onChangeUsername = value => {
		if (value.length > 0) {
			const foundTarget = listUsers.filter(
				item => item.username === value
			);
			if (foundTarget.length > 0) {
				changeFormData({
					...formData,
					username: value,
					isUsernameExist: true,
					isUsernameValid: false
				});
			} else {
				changeFormData({
					...formData,
					username: value,
					isUsernameExist: false,
					isUsernameValid: true
				});
			}
		} else {
			changeFormData({
				...formData,
				username: value
			});
		}

		// validateUsernameExist(value);
	};

	const onChangePassword = value => {
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

	const onChangeConfirmPassword = value => {
		if (value.length > 0) {
			if (value === formData.password) {
				changeFormData({
					...formData,
					confirmPassword: value,
					isConfirmPasswordValid: true,
					isConfirmPasswordMatch: true
				});
			} else {
				changeFormData({
					...formData,
					confirmPassword: value,
					isConfirmPasswordValid: false,
					isConfirmPasswordMatch: false
				});
			}
		} else {
			changeFormData({
				...formData,
				confirmPassword: value
			});
		}
	};

	const onRegister = () => {
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
		if (confirmPassword.length === 0) {
			changeFormData({
				...formData,
				isConfirmPasswordValid: false
			});
			return;
		}

		if (isUsernameExist || !isConfirmPasswordMatch) {
			return;
		}

		registerUser({
			username,
			password
		});

		changeIsRegisterSuccess(true);
	};

	return (
		<SingleFormLayout className="pt-3">
			<Form>
				{/* Username */}
				<FormGroup>
					<Label>Username</Label>
					<Input
						type="text"
						placeholder="Username..."
						valid={
							username.length > 0 &&
							isUsernameValid &&
							!isUsernameExist
						}
						invalid={!isUsernameValid || isUsernameExist}
						value={username}
						onChange={event => onChangeUsername(event.target.value)}
					/>
					<FormFeedback valid>Username looks good</FormFeedback>
					{username.length > 0 && isUsernameExist && (
						<FormFeedback>
							That name is already taken!!
						</FormFeedback>
					)}
					{username.length === 0 && (
						<FormFeedback>Please input username!</FormFeedback>
					)}
				</FormGroup>

				{/* Password */}
				<FormGroup>
					<Label>Password</Label>
					<Input
						type="password"
						placeholder="Password..."
						valid={password.length > 0 && isPasswordValid}
						invalid={!isPasswordValid}
						value={password}
						onChange={event => onChangePassword(event.target.value)}
					/>
					<FormFeedback valid>Valid password</FormFeedback>
					{password.length === 0 && (
						<FormFeedback>Please input password!</FormFeedback>
					)}
				</FormGroup>

				{/* Confirm Password */}
				<FormGroup>
					<Label>Confirm Password</Label>
					<Input
						type="password"
						placeholder="Password..."
						valid={
							confirmPassword.length > 0 &&
							isConfirmPasswordValid &&
							isConfirmPasswordMatch
						}
						invalid={
							!isConfirmPasswordValid || !isConfirmPasswordMatch
						}
						value={confirmPassword}
						onChange={event =>
							onChangeConfirmPassword(event.target.value)
						}
					/>
					<FormFeedback valid>Password is matched</FormFeedback>
					{confirmPassword.length > 0 && !isConfirmPasswordMatch && (
						<FormFeedback>Password is not matched!!</FormFeedback>
					)}
					{confirmPassword.length === 0 && (
						<FormFeedback>
							Please input confirm password!!
						</FormFeedback>
					)}
				</FormGroup>
			</Form>

			{/* Button Group */}
			<Row>
				<StyledCol xs={12} sm={4}>
					<Button
						color="primary"
						onClick={onRegister}
						className="px-3"
					>
						Register
					</Button>
				</StyledCol>
				<StyledCol xs={12} sm={8}>
					<span>Already had an account?</span>
					<Link to="/login">&nbsp;Login now</Link>
				</StyledCol>
			</Row>

			{/* Alert */}
			<div>
				<Alert
					color="success"
					isOpen={isRegisterSuccess}
					toggle={() => changeIsRegisterSuccess(false)}
				>
					<span>Register success!</span>
					<Link to="/login">
						&nbsp;Click here to return login page.
					</Link>
				</Alert>
			</div>
		</SingleFormLayout>
	);
};

SignupPage.propTypes = {
	registerUser: PropTypes.func
};

export default SignupPage;
