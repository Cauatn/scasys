import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { ItemsContext, useItemContext } from "@/context/ItemsContext";

import { Link } from "react-router-dom";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";

function FiveaETP() {
	const { items, setItemEtapa } = useItemContext();

	return (
		<div className="flex max-w-2xl m-auto gap-x-24 justify-between mt-8">
			<div className="flex flex-col w-full gap-8">
				<h1 className="text-2xl font-bold w-full"> Fase de Inventario</h1>
				<Input
					placeholder="Forneça o nome para etapa"
					onChange={(event) => setItemEtapa(event.target.value)}
				/>
				<div className="inline-flex content-center items-center justify-start gap-6">
					<span className="w-44">Número de repetições :</span>
					<Input type="number" className="w-16" defaultValue={0} />
				</div>
				<div className="inline-flex content-center items-center justify-start gap-6">
					<span>Adicionar etapa procedimental ?</span>
					<Button className="bg-green-400 rounded-full p-3">
						<PlusIcon className="p-0" />
					</Button>
				</div>
				<div className="flex justify-end">
					<Link to={"/inventario=3"}>
						<Button>Proxima</Button>
					</Link>
				</div>
			</div>
			<div>
				<Table className="w-fit border">
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Fase</TableHead>
							<TableHead>Etapa procedimental</TableHead>
							<TableHead>Especificidade</TableHead>
							<TableHead>Item</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{items.map((e) => {
							return (
								<TableRow key={e.Item}>
									<TableCell className="font-medium">{e.fase}</TableCell>
									<TableCell className="font-medium">{e.etapa}</TableCell>
									<TableCell className="font-medium">
										{e.especificidade}
									</TableCell>
									<TableCell className="font-medium text-right">
										{e.Item}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

export { FiveaETP };
