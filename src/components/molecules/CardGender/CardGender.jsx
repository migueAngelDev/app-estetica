import React from "react";
import { CardGenderWrapper } from "./CardGender.styled";

const CardGender = ({ title, onClick }) => {
	return (
		<CardGenderWrapper onClick={onClick}>
			<h3>{title}</h3>
		</CardGenderWrapper>
	);
};

export default CardGender;
