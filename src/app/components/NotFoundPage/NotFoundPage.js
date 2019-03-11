import React from "react";
import { SingleFormLayout } from "../../components/Common";
import styles from "./NotFoundPage.css";

const NotFoundPage = props => {
	return (
		<SingleFormLayout className={styles.fullPage}>
			<h1 className="text-center">404 Not Found</h1>
		</SingleFormLayout>
	);
};

export default NotFoundPage;
