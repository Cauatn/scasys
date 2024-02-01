import { Button } from "@/components/ui/button";
import { useItemContext } from "@/context/ItemsContext";
import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ItemsTable } from "@/components/Items-table";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export function SixaETP() {
	const { setItemEspecificidade, setItemNome } = useItemContext();

	return (
		<div className="mx-auto max-w-4xl bg-white p-6 shadow-lg space-y-6">
			<div className="flex items-center space-x-4 mb-6">
				<Button className="flex items-center space-x-2" variant="ghost">
					<ArrowLeftIcon className="w-5 h-5" />
					<Link to={"/inventario=1"}>
						<span>Retornar</span>
					</Link>
				</Button>
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">SCASYS</h1>
				</div>
			</div>
			<div className="flex flex-col w-full gap-4">
				<h1 className="text-2xl font-bold w-full"> Fase de Inventario</h1>
				<div className="flex items-center justify-between gap-4 mt-4 mb-4">
					<div className="flex flex-col space-y-2">
						<Label htmlFor="especificidade" className="pl-2">
							Especificidade :
						</Label>
						<Input
							id="especificidade"
							placeholder="Especificidade"
							onChange={(event) => setItemEspecificidade(event.target.value)}
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<Label htmlFor="Item" className="pl-2">
							Item :
						</Label>

						<Input
							id="Item"
							placeholder="Item"
							onChange={(event) => setItemNome(event.target.value)}
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<Label htmlFor="Formula" className="pl-2">
							Formula Química :
						</Label>
						<Input id="Formula" placeholder="Formula" />
					</div>
				</div>
				<div className="flex justify-end">
					<Link to={"/inventario=4"}>
						<Button className="bg-green-400">Proxima</Button>
					</Link>
				</div>
			</div>
			<div>
				<ItemsTable />
			</div>
		</div>
	);
}
