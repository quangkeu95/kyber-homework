import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const Layout = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: center;
`;

const SingleFormLayout = props => {
	const { children, className } = props;
	return (
		<Layout className={className}>
			<Row style={{ width: "100%" }}>
				<Col md={{ size: 6, offset: 3 }} xl={{ size: 4, offset: 4 }}>
					{children}
				</Col>
			</Row>
			{/* <div className="row w-100">
				<div className="col col-md-6 offset-md-3 col-xl-4 offset-xl-4 py-3">
					{children}
				</div>
			</div> */}
		</Layout>
	);
};

export default SingleFormLayout;
