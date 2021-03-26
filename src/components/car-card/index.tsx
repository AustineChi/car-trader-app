import { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "../../../context/CartContext";
import { CarModel } from "../../../models/Car";

import { Car, CarImage, CarName, CarDetails, Button } from "./CarCard.styles";

interface CarProps {
	car: CarModel | null;
}

export const CarCard = ({ car }: CarProps) => {
	const { carts, addCartItem, removeCartItem } = useContext(CartContext);
	const [itemInCart, setItemInCart] = useState<boolean>(
		!!carts.find((i) => i.id === car.id)
	);
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
					<CarDetails>
						<div>Year:{car.year}</div> <div>€{car.price}</div>
					</CarDetails>
					<CarName>{`${car.make} ${car.model}`}</CarName>
				</a>
			</Link>
			<Button
				onClick={() => {
					!itemInCart ? addCartItem(car) : removeCartItem(car);
					setItemInCart(!itemInCart);
				}}
			>
				{!itemInCart ? "Add to Cart" : "Remove from Cart"}
			</Button>
		</Car>
	);
};
