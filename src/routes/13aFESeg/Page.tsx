import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	ArrowLeftIcon,
	TriangleDownIcon,
	TriangleUpIcon,
} from "@radix-ui/react-icons";
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FeForm } from "./components/FeForm";
import { Link } from "react-router-dom";

function ThirteenaFeSeg() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedItem] = useState<string>("selecione aqui");

	function setItem(e: Event) {
		const target = e.target as HTMLDivElement;
		setSelectedItem(target.textContent ?? "unknown");
	}

	return (
		<div className="mx-auto max-w-4xl bg-white p-6 shadow-lg space-y-6 h-screen">
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
			<div className="inline-flex gap-9 items-center ">
				<h1 className="text-2xl font-bold w-full">
					Segurança ⚠️
					<br />
					Fator explosão potencial
				</h1>
			</div>
			<div className="space-y-4">
				<h1>Compostos químicos</h1>
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
					<DropdownMenuContent className="w-36">
						<DropdownMenuGroup>
							<DropdownMenuItem onSelect={setItem}>Composto 1</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Composto 2</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Composto 3</DropdownMenuItem>
							<DropdownMenuSeparator />
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<FeForm />
			<div className="flex flex-col gap-6">
				<div className="inline-flex items-center gap-2 w-[434px] justify-start">
					<Label htmlFor="Fontb">Fonte: </Label>
					<Input
						type="text"
						className="pl-2 h-8 max-w-80"
						id="Fontb"
						placeholder="fonte bibliográfica"
					/>
				</div>
			</div>
		</div>
	);
}

export { ThirteenaFeSeg };
