import { Button } from "@/components/ui/button";
import { useItemContext } from "@/context/ItemsContext";

import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { ArrowLeftIcon, PlusIcon } from "@radix-ui/react-icons";
import { ItemsTable } from "@/components/Items-table";

function FiveaETP() {
	const { setItemEtapa } = useItemContext();

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
			<div className="flex flex-col w-full gap-8">
				<h1 className="text-2xl font-bold w-full"> Fase de Inventario</h1>
				<Input
					placeholder="Forneça o nome para etapa"
					onChange={(event) => setItemEtapa(event.target.value)}
				/>
				<div className="inline-flex content-center items-center justify-around space-x-2">
					<div className="inline-flex items-center justify-start">
						<span className="w-44">Número de repetições :</span>
						<Input type="number" className="w-16" defaultValue={0} />
					</div>
					<div className="inline-flex content-center items-center justify-start space-x-4">
						<span>Adicionar etapa procedimental ?</span>
						<Button className="bg-green-500 rounded-full p-3">
							<PlusIcon className="p-0" />
						</Button>
					</div>
					<div>
						<Link to={"/inventario=3"}>
							<Button>Proxima</Button>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<ItemsTable />
			</div>
		</div>
	);
}

export { FiveaETP };
