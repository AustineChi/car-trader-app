import { CarModel } from "../../../models/Car";
import { Table, Row, RowItem } from "./DetailsTable.styles";

interface CarProps {
	carDetails: CarModel | null;
}

export const DetailsTable = ({ carDetails }: CarProps) => {
	return (
		<Table>
			<Row>
				<RowItem weight={"700"}>Brand:</RowItem>
				<RowItem background={"white"}>{carDetails.make}</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Model:</RowItem>
				<RowItem background={"white"}> {carDetails.model}</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Year:</RowItem>
				<RowItem background={"white"}>{carDetails.year}</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Fuel Type:</RowItem>
				<RowItem background={"white"}>{carDetails.fuelType}</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Kilometers:</RowItem>
				<RowItem background={"white"}>{carDetails.kilometers}</RowItem>
			</Row>

			<Row>
				<RowItem weight={"700"}>price:</RowItem>
				<RowItem background={"white"}>€{carDetails.price}</RowItem>
			</Row>
		</Table>
	);
};
