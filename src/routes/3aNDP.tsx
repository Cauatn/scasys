import { useContext, useEffect, useState } from "react";

import { ItemsContext, useItemContext } from "@/context/ItemsContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

function TrheeaNDP() {
	const { procedimentos, novoProcedimento } = useItemContext();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedItem] = useState<string>("selecione aqui");
	const [procedimento, setProcedimento] = useState<string>("");

	function setItem(e: Event) {
		const target = e.target as HTMLDivElement;
		setSelectedItem(target.textContent ?? "unknown");
	}

	return (
		<div className="h-screen flex flex-row max-w-[925px] m-auto mt-4 gap-4">
			<div className="flex content-center justify-center w-full ">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-4 items-center">
							<p>
								Forneça um nome para o
								<br />
								procedimento, a ser avaliado:
							</p>
							<Input
								placeholder="Forneça um nome"
								className="h-9 w-30 pl-2"
								onChange={(event) => {
									setProcedimento(event.target.value);
								}}
							/>
						</div>
						<div className="flex gap-4 justify-between items-center">
							<p>Escolha um modo de cálculo</p>
							<DropdownMenu>
								<DropdownMenuTrigger
									asChild
									className="flex flex-row min-w-32 justify-between border rounded-md gap-1 pr-2 pl-2"
								>
									<Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
										{selectedValue}
										{isOpen ? (
											<TriangleDownIcon className="size-6" />
										) : (
											<TriangleUpIcon className="size-6" />
										)}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-48">
									<DropdownMenuLabel>Modos de calculo</DropdownMenuLabel>
									<DropdownMenuGroup>
										<DropdownMenuItem onSelect={setItem}>
											reducionista
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem onSelect={setItem}>
											guiado
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem onSelect={setItem}>
											expandido
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem onSelect={setItem}>
											exaustivo
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					<Card className="w-[400px]">
						<CardHeader className="flex justify-start content-start items-start">
							<CardTitle className="">Exemplos:</CardTitle>
							<CardDescription className="">
								Síntese de polietileno --- reducionista
							</CardDescription>
							<CardDescription className="">
								Isolamento do ácido fórmico --- guiado
							</CardDescription>
						</CardHeader>
					</Card>
					<div className="flex justify-end">
						<Link to={"/inventario=1"}>
							<Button
								className="bg-green-400 w-fit "
								onClick={() => {
									novoProcedimento(procedimento, selectedValue);
									console.log(procedimentos);
								}}
							>
								Salvar procedimento
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export { TrheeaNDP };
