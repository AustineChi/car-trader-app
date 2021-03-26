import { useState, createContext } from "react";

enum Menu {
	Home = "Home",
	Faq = "Faq",
	Cart = "Cart",
}

interface MenuContextType {
	menu: Menu;
	setMenu: (Menu: Menu) => void;
};

const MenuContext = createContext<MenuContextType>(null);

const MenuProvider = ({ children }) => {
	const [menu, setMenu] = useState<Menu>(Menu.Home);
	return (
		<MenuContext.Provider value={{ menu, setMenu }}>
			{children}
		</MenuContext.Provider>
	);
};

export { MenuProvider, MenuContext, Menu };
