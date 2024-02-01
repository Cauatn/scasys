import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { useItemContext } from "@/context/ItemsContext";

export function ItemsTable() {
	const { items } = useItemContext();

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Fase</TableHead>
					<TableHead>Etapa procedimental</TableHead>
					<TableHead>Especificidade</TableHead>
					<TableHead>Item</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((e) => {
					return (
						<TableRow>
							<TableCell className="font-medium">{e.fase}</TableCell>
							<TableCell className="font-medium">{e.etapa}</TableCell>
							<TableCell className="font-medium">{e.especificidade}</TableCell>
							<TableCell className="font-medium">{e.Item}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
