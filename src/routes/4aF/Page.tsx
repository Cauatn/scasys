import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ItemsTable } from "@/components/Items-table";
import { useItemContext } from "@/context/ItemsContext";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

function FouraF() {
	const { setItemFase } = useItemContext();

	return (
		<div className="mx-auto max-w-4xl bg-white p-6 shadow-lg">
			<div className="flex items-center space-x-4 mb-6">
				<Button className="flex items-center space-x-2" variant="ghost">
					<ArrowLeftIcon className="w-5 h-5" />
					<span>Retornar</span>
				</Button>
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">SCASYS</h1>
				</div>
			</div>
			<h1 className="text-2xl font-bold mb-6">Fase de Inventário</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<Select onValueChange={(e) => setItemFase(e)}>
					<SelectTrigger id="phase-select">
						<SelectValue placeholder="selecione aqui" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectItem value="inicial">Inicial</SelectItem>
						<SelectItem value="intermediaria">Intermediária</SelectItem>
						<SelectItem value="final">Final</SelectItem>
					</SelectContent>
				</Select>
				<div className="flex items-center space-x-4">
					<p className="text-sm">Adicionar fase intermediaria?</p>
					<Button className="bg-green-500 text-white">+</Button>
				</div>
				<Link to={"/inventario=2"} className="justify-self-end md:col-span-1">
					<Button>Próxima</Button>
				</Link>
			</div>
			<ItemsTable />
		</div>
	);
}

export { FouraF };
