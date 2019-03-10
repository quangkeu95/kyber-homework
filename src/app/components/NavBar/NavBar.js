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
			<Link to="/">Home</Link>

			{currentUser && (
				<ButtonGroup>
					<Link to="user-profile">
						<Button className="btn-info">
							<i className="far fa-user mr-2" />
							User Profile
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
						<Button className="btn-light">Login</Button>
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
