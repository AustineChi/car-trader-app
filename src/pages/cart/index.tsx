import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../../../context/CartContext";
import { Header } from "../../components/header";
import { Title, Container } from "../../../styles/General.styles";
import {
	OrderItem,
	Item,
	OrderName,
	OrderPrice,
	OrderHeadingTotal,
	OrderHeaderNothing,
	Button,
	CartWrapper,
	DeleteIcon,
} from "../../../styles/Order.styles";

export default function Cart() {
	const { carts, removeCartItem } = useContext(CartContext);

	return (
		<Container>
			<Header />
			<CartWrapper>
				<Title>Cart Items</Title>

				{carts &&
					carts.map((car) => (
						<OrderItem key={`cart-${car.id}`}>
							<Item>
								<OrderName>{`${car.make} ${car.model}`}</OrderName>
								<OrderPrice>
									<span>{`€${car.price}`}</span>
								</OrderPrice>
								<Link
									href={`/car/[make]/[model]/[id]`}
									as={`/car/${car.make}/${car.model}/${car.id}`}
								>
									<a>
										<Button>View</Button>
									</a>
								</Link>

								<DeleteIcon
									alt="delete"
									src="/delete.svg"
									width={30}
									height={30}
									onClick={() => removeCartItem(car)}
								/>
							</Item>
						</OrderItem>
					))}
				{carts && carts.length > 0 ? (
					<OrderHeadingTotal title="order heading total">
						Total Price:
						<span title="total price">
							{`€${carts.reduce(
								(curr, val) => curr + val.price,
								0
							)}`}
						</span>
					</OrderHeadingTotal>
				) : (
					<OrderHeaderNothing>
						It looks like you have an empty cart, order now!
					</OrderHeaderNothing>
				)}
			</CartWrapper>
		</Container>
	);
}
