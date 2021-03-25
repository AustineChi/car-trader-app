import Head from "next/head";
import { GetStaticProps } from "next";
import { CarModel } from "../../models/Car";
import { openDB } from "../openDB";
import {Header} from "../components/header";
import {CarCard} from "../components/car-card";
import {FilterForm} from "../components/filter-form"
import { Title, Container } from "../../styles/General.styles";
import { CarsWrapper } from "../../styles/Home.styles";


interface CarsProps {
	cars: CarModel[];
}

export default function Home({cars}: CarsProps) {

	const filterFunction =  (e: React.FormEvent, formData: {}) => {
		e.preventDefault()
		console.log(formData)
	  }
	return (
		<Container>
		   <Header/>
			<Title>Buy the best cars!</Title>
			<FilterForm  filterFunction={filterFunction} />
			<CarsWrapper>
			{cars.map((car, id) => (
					<CarCard key={id} car={car}/>
				))}
				</CarsWrapper>
		</Container>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const db = await openDB();
	const cars = await db.all('SELECT * FROM Car');
	return { props: { cars } };
};
