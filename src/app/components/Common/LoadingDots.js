import React from "react";
import styled, { keyframes } from "styled-components";

const wave = keyframes`
    0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-15px);
	} 
`;

const WaveContainer = styled.div`
	position: relative;
	padding-top: 6px;
`;

const WaveDot = styled.div`
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	margin-right: 3px;
	background: #737575;
	animation: ${wave} 1.3s linear infinite;

	&:nth-child(2) {
		animation-delay: 0.2s;
	}

	&:nth-child(3) {
		animation-delay: 0.4s;
	}
`;

const LoadingDots = props => {
	const { className } = props;
	return (
		<WaveContainer className={className}>
			<WaveDot />
			<WaveDot />
			<WaveDot />
		</WaveContainer>
	);
};

export default LoadingDots;
