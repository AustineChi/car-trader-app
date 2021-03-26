import Head from "next/head";
import { GetStaticProps } from "next";
import { CarModel } from "../../../models/Car";
import {Header} from "../../components/header";
import { Title, Container } from "../../../styles/General.styles";


interface CartProps {
	carts: CarModel[];
}

export default function Home({carts}: CartProps) {

	return (
		<Container>
		   <Header/>
			<Title>Cart Items!</Title>
			
		</Container>
	);
}
