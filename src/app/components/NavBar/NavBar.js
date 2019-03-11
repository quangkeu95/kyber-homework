import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
	Button,
	ButtonGroup,
	Navbar,
	NavbarBrand,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import userIcon from "../../../assets/icon/user.svg";

const NavBar = props => {
	const { currentUser, doLogout, history } = props;

	const [isLogoutModalOpen, changeIsLogoutModalOpen] = useState(false);

	const onLogout = () => {
		changeIsLogoutModalOpen(false);
		doLogout();
		history.push("/");
	};

	return (
		<Navbar
			color="light"
			light
			expand="sm"
			style={{ justifyContent: "space-between" }}
		>
			<NavbarBrand href="/">Home</NavbarBrand>

			{currentUser && (
				<ButtonGroup>
					<Link to="user-profile">
						<Button className="btn-info mr-2">
							<img src={userIcon} alt="user-icon" />
							<span className="ml-2">User Profile</span>
						</Button>
					</Link>
					<Button
						className="btn-light"
						onClick={() => changeIsLogoutModalOpen(true)}
					>
						Logout
					</Button>
				</ButtonGroup>
			)}

			{!currentUser && (
				<ButtonGroup>
					<Link to="/login">
						<Button className="btn-light mr-2">Login</Button>
					</Link>
					<Link to="/signup">
						<Button color="primary">Sign Up</Button>
					</Link>
				</ButtonGroup>
			)}

			<Modal
				isOpen={isLogoutModalOpen}
				toggle={() => changeIsLogoutModalOpen(!isLogoutModalOpen)}
			>
				<ModalHeader
					toggle={() => changeIsLogoutModalOpen(!isLogoutModalOpen)}
				>
					Logout
				</ModalHeader>
				<ModalBody>Are you sure to logout?</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={onLogout}>
						Yes
					</Button>
					<Button
						color="primary"
						onClick={() => changeIsLogoutModalOpen(false)}
					>
						No
					</Button>
				</ModalFooter>
			</Modal>
		</Navbar>
	);
};

NavBar.propTypes = {
	currentUser: PropTypes.object,
	doLogout: PropTypes.func
};

export default withRouter(NavBar);
