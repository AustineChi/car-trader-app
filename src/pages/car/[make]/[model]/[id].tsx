import { GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "../../../../../utils";
import { CarModel } from "../../../../../models/Car";
import { Header } from "../../../../components/header";
import {CarCard} from "../../../../components/car-card";
import { DetailsTable} from "../../../../components/details-table"
import { Title, Container, FlexContainer, Text, SubHeader } from "../../../../../styles/General.styles";

interface CarProps {
	car: CarModel | null;
}

export default function CarDetails({ car }: CarProps) {
	if (!car) {
		return (
			<div>
				<Title>Not Found!</Title>

				<h2>Sorry, car not found!</h2>
			</div>
		);
	}
	return (
		<Container>
			<Header />
			<Title>{`${car.make} ${car.model}`}</Title>
			<FlexContainer>
				<CarCard  car={car}/>
					<DetailsTable carDetails={car} />
				</FlexContainer>
				<FlexContainer>
					<>
					<SubHeader>Description</SubHeader>
				<Text>
				{car.details}
				</Text>
				</>
				</FlexContainer>

		</Container>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const car = await fetcher(`http://localhost:3000/api/car/${params.id}`);
	return { props: { car: car || null } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const cars = await fetcher("http://localhost:3000/api/cars");
	return {
		paths: cars.map((car) => ({
			params: {
				id: car.id.toString(),
				make: car.make.toString(),
				model: car.model.toString(),
			},
		})),
		fallback: false,
	};
};
