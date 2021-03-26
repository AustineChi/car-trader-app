import styled from "styled-components";
import Image from "next/image";

export const CartWrapper = styled.section`
	width: 100%;
	max-width: 750px;
`;

export const OrderItem = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	align-items: center;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
	background-color: white;
`;

export const Item = styled.div`
	display: flex;
	padding: 10px;
	align-items: center;
	width: 100%;
`;

export const OrderName = styled.h3`
	flex: 1;
	& > span {
		padding: 0 4px;
	}
`;

export const OrderPrice = styled.div`
	font-weight: 700;
	flex: 1;
`;

export const OrderHeader = styled.h3`
	text-align: center;
	font-family: "Titan One", cursive;
	color: #f08a5d;
	text-shadow: 1px 1px #ff8c00;
	font-size: 30px;
`;

export const OrderQuantity = styled.div`
	color: #f08a5d;
	font-size: 16px;
	font-weight: 700;
	padding: 0 20px;
`;

export const OrderHeadingTotal = styled(OrderHeader)`
	font-size: 25px;
	color: purple;
	& > span {
		padding: 0 7px;
	}
`;

export const OrderHeaderNothing = styled.h4`
	text-align: center;
`;

export const Button = styled.button`
	padding: 0.4rem 1rem;
	font-size: 1rem;
	font-weight: 700;
	border-radius: 20px;
	border: none;
	cursor: pointer;
	outline: none;
	border-radius: 100px;
	background: #4b5320;
	color: #fff;
	margin: 20px;
	display: block;
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
	}
`;

export const DeleteIcon = styled(Image)`
	cursor: pointer;
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
	}
	&:active {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
		transform: translateY(4px);
	}
`;
