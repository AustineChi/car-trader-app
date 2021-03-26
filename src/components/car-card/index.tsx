import Link from "next/link";
import { CarModel } from "../../../models/Car";

import { Car, CarImage, CarName, Button } from "./CarCard.styles";

interface CarProps {
	car: CarModel | null;
}

export const CarCard = ({ car }: CarProps) => {
	return (
		<Car>
			<Link
				href={`/car/[make]/[model]/[id]`}
				as={`/car/${car.make}/${car.model}/${car.id}`}
			>
				<a>
					<CarImage
						src={car.photoUrl}
						alt={`${car.make} ${car.model}`}
					/>
					<CarName>{`${car.make} ${car.model}`}</CarName>
				</a>
			</Link>
			<Button>Add to Cart</Button>
		</Car>
	);
};
