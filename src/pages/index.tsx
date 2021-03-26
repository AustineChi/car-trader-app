import { useState } from "react";
import { GetStaticProps } from "next";
import useSwr from "swr";
import { CarModel } from "../../models/Car";
import { BrandModel } from "../../models/Brand";
import { fetcher } from "../../utils";
import { Header } from "../components/header";
import { CarCard } from "../components/car-card";
import { FilterForm } from "../components/filter-form";
import { Title, Container } from "../../styles/General.styles";
import { CarsWrapper } from "../../styles/Home.styles";

interface CarsProps {
	cars: CarModel[];
	brands: BrandModel[];
}

export default function Home({ cars, brands }: CarsProps) {
	const url = "http://localhost:3000/api/cars";
	const { data, error } = useSwr(url, fetcher, { initialData: cars });
	const [carsData, setCarsData] = useState<CarModel[]>(cars);

	function filterFunction(
		e: React.FormEvent,
		formData: {
			brand: string;
			year: number;
			minPrice: number;
			maxPrice: number;
		}
	): void {
		e.preventDefault();
		let data = [...cars];
		if (formData.brand) {
			data = data.filter((car) => car.make === formData.brand);
		}

		if (formData.year) {
			data = data.filter((car) => car.year === Number(formData.year));
		}

		if (formData.minPrice) {
			data = data.filter((car) => car.price >= Number(formData.minPrice));
		}

		if (formData.maxPrice) {
			data = data.filter((car) => car.price <= Number(formData.maxPrice));
		}
		setCarsData(data);
	}
	if (error) return <div>An error occured!</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<Container>
			<Header />
			<Title>Buy the best cars!</Title>
			<FilterForm filterFunction={filterFunction} brands={brands} />
			<CarsWrapper>
				{carsData.map((car, id) => (
					<CarCard key={id} car={car} />
				))}
			</CarsWrapper>
		</Container>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const cars = await fetcher("http://localhost:3000/api/cars");
	const brands = await fetcher("http://localhost:3000/api/brands");

	return { props: { cars, brands } };
};
