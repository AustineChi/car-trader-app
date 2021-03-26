import { useState, createContext } from "react";
import { CarModel } from "../models/Car";

interface CartContextType {
	carts: CarModel[];
	addCartItem: (Car: CarModel) => void;
	removeCartItem: (Car: CarModel) => void;
}

const CartContext = createContext<CartContextType>(null);

const CartProvider = ({ children }) => {
	const [carts, setCarts] = useState<CarModel[]>([]);

	function addCartItem(item: CarModel): void {
		if (item) setCarts([item, ...carts]);
	}

	function removeCartItem(item: CarModel): void {
		if (item) {
			let items = [...carts];
			items = items.filter((i) => i !== item);
			setCarts([...items]);
		}
	}

	return (
		<CartContext.Provider value={{ carts, addCartItem, removeCartItem }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, CartContext };
