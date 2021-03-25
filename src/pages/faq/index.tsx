import { useState } from "react";
import { GetStaticProps } from "next";
import { FaqModel } from "../../../models/Faq";
import { openDB } from "../../openDB";
import {Header} from "../../components/header"
import {Title, Container } from "../../../styles/General.styles";
import {
	Wrapper,
	AccordionWrapper,
	InternalWrapper,
	ItemTitle,
	Text,
} from "../../../styles/Faq.styles";

interface FaqProps {
	faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
	const [accordion, setAccordion] = useState(null);

	return (
		<Container>
			<Header/>
			<Title>FAQ</Title>

			<Wrapper>
				{faq.map((item, id) => (
					<AccordionWrapper
						key={id}
						onClick={() =>
							setAccordion(accordion === id ? null : id)
						}
					>
						<ItemTitle>{item.question}</ItemTitle>
						<InternalWrapper open={accordion === id}>
							<Text>{item.answer}</Text>
						</InternalWrapper>
					</AccordionWrapper>
				))}
			</Wrapper>
		</Container>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const db = await openDB();
	const faq = await db.all("SELECT * FROM FAQ ORDER BY createDate DESC");
	return { props: { faq } };
};
