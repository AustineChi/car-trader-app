import React from "react";

import {
	Form,
	FormField,
	InputArea,
	Input,
	FormButton,
} from "./FilterForm.styles";

interface FilterProps {
	filterFunction: Function;
}

export const FilterForm = ({
	filterFunction
}: FilterProps) => {
  const [formData, setFormData] = React.useState<{}>()

  const handleFormChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

	return (
		<Form onSubmit={(e) => filterFunction(e, formData)}>
			<InputArea>
				<FormField>
					<label htmlFor="brand">Brand</label>
					<Input onChange={handleFormChange} type="text" id="brand" />
				</FormField>
				<FormField>
					<label htmlFor="year">Year</label>
					<Input onChange={handleFormChange} type="text" id="year" />
				</FormField>
        <FormField>
					<label htmlFor="minPrice">Min Price</label>
					<Input onChange={handleFormChange} type="text" id="minPrice" />
				</FormField>
        <FormField>
					<label htmlFor="maxPrice">Max Price</label>
					<Input onChange={handleFormChange} type="text" id="maxPrice" />
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
