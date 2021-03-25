import Link from "next/link";
import { CarModel } from "../../../models/Car";

import { Car, CarImage, CarName } from "./CarCard.styles";

interface CarProps {
	car: CarModel | null;
}

export const CarCard = ({car}:CarProps) => {
	return (
		<Link href={`/car/[make]/[model]/[id]`}  as={`/car/${car.make}/${car.model}/${car.id}`} >
			<a>
				<Car>
					<CarImage src={car.photoUrl} alt={`${car.make} ${car.model}`}/>
					<CarName>{`${car.make} ${car.model}`}</CarName>
				</Car>
			</a>
		</Link>
	);
};
