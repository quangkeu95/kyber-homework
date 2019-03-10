import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavBar } from "./app/components/NavBar";
// import { HomePage } from "./app/components/HomePage";
// import { LoginPage } from "./app/components/LoginPage";
// import { SignupPage } from "./app/containers/SignupPage";

import App from "./app/App";

import store from "./app/configureStore";

const Root = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));
