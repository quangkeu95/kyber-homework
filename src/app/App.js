import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./containers/NavBar";
import { HomePage } from "./containers/HomePage";
import { LoginPage } from "./containers/LoginPage";
import { SignupPage } from "./containers/SignupPage";
import { UserProfilePage } from "./containers/UserProfilePage";
import { NotFoundPage } from "./components/NotFoundPage";

const App = props => {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
					<Route path="/user-profile" component={UserProfilePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
