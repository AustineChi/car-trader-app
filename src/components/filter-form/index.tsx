import React from "react";
import { BrandModel } from "../../../models/Brand";
import {
	Form,
	FormField,
	InputArea,
	FormButton,
	SelectBox,
} from "./FilterForm.styles";

interface FilterProps {
	filterFunction: Function;
	brands: BrandModel[];
}

export const FilterForm = ({ filterFunction, brands }: FilterProps) => {
	const [formData, setFormData] = React.useState<{
    brand: string,
    year: string,
    minPrice: string,
    maxPrice: string

  }>();
	const prices = [
		{
			value: "1000",
			key: "1,000",
		},
		{
			value: "3000",
			key: "3,000",
		},
		{
			value: "5000",
			key: "5,000",
		},
		{
			value: "8000",
			key: "8,000",
		},
		{
			value: "12000",
			key: "13,000",
		},
		{
			value: "17000",
			key: "17,000",
		},
		{
			value: "25000",
			key: "25,000",
		},
		{
			value: "30000",
			key: "30,000",
		},
	];

	const years = [
		"2000",
		"2001",
		"2002",
		"2003",
		"2004",
		"2005",
		"2006",
		"2007",
		"2008",
		"2009",
		"2010",
		"2011",
		"2012",
		"2013",
		"2014",
		"2015",
		"2016",
		"2017",
		"2018",
		"2019",
		"2020",
		"2020",
	];

	const handleFormChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	): void => {
		setFormData({
			...formData,
			[e.currentTarget.id]: e.currentTarget.value,
		});
	};

	return (
		<Form onSubmit={(e) => filterFunction(e, formData)}>
			<InputArea>
				<FormField>
					<label htmlFor="brand">Brand</label>
					<SelectBox>
						<select
							name="brand"
							id="brand"
							onChange={handleFormChange}
						>
							<option value="">All brands</option>
							{brands.map((brand, id) => (
								<option
									key={id}
									value={brand.make}
								>{`${brand.make}(${brand.count})`}</option>
							))}
						</select>
					</SelectBox>
				</FormField>
				<FormField>
					<label htmlFor="year">Year</label>
					<SelectBox>
						<select
							name="year"
							id="year"
							onChange={handleFormChange}
						>
							<option value="">All Year</option>
							{years.map((year, id) => (
								<option key={id} value={year}>
									{year}
								</option>
							))}
						</select>
					</SelectBox>
				</FormField>
				<FormField>
					<label htmlFor="minPrice">Min Price</label>
					<SelectBox>
						<select
							name="minPrice"
							id="minPrice"
							onChange={handleFormChange}
						>
							<option value="">No Min Price</option>
							{prices.map((price, id) => (
								<option key={id} value={price.value}>
									{price.key}
								</option>
							))}
						</select>
					</SelectBox>
				</FormField>
				<FormField>
					<label htmlFor="maxPrice">Max Price</label>
					<SelectBox>
						<select
							name="maxPrice"
							id="maxPrice"
							onChange={handleFormChange}
						>
							<option value="">No Max Price</option>
							{prices.filter(x => Number(x.value) > (Number(formData?.minPrice))).map((price, id) => (
								<option key={id} value={price.value}>
									{price.key}
								</option>
							))}
						</select>
					</SelectBox>
				</FormField>
			</InputArea>
			<FormButton
			//   disabled={formData === undefined ? true : false}
			>
				Filter
			</FormButton>
		</Form>
	);
};
