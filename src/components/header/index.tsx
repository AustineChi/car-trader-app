import Link from "next/link";
import {
	Wrapper,
	HeaderLeftSection,
	HeaderRightSection,
	Title,
} from "./Header.styles";

export const Header = () => {
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
				<div>
					<Link href="/">
						<a>Home</a>
					</Link>
				</div>
				<div>
					<Link href="/cart">
						<a>Cart</a>
					</Link>
				</div>
				<div>
					<Link href="/faq">
						<a>Faq</a>
					</Link>
				</div>
			</HeaderRightSection>
		</Wrapper>
	);
};
