import { useContext, useEffect } from "react";
import Link from "next/link";
import { MenuContext, Menu } from "../../../context/MenuContext";
import {
	Wrapper,
	HeaderLeftSection,
	HeaderRightSection,
	Title,
	StyledLink,
} from "./Header.styles";

export const Header = () => {
	const { menu, setMenu } = useContext(MenuContext);

	return (
		<Wrapper>
			<HeaderLeftSection>
				<Link href="/">
					<a>
						<Title>Car Trader App</Title>
					</a>
				</Link>
			</HeaderLeftSection>
			<HeaderRightSection>
				<div onClick={() => setMenu(Menu.Home)}>
					<Link href="/">
						<StyledLink active={menu === Menu.Home}>
							Home
						</StyledLink>
					</Link>
				</div>
				<div onClick={() => setMenu(Menu.Cart)}>
					<Link href="/cart">
						<StyledLink active={menu === Menu.Cart}>Cart</StyledLink>
					</Link>
				</div>
				<div onClick={() => setMenu(Menu.Faq)}>
					<Link href="/faq">
						<StyledLink active={menu === Menu.Faq}>Faq</StyledLink>
					</Link>
				</div>
			</HeaderRightSection>
		</Wrapper>
	);
};
