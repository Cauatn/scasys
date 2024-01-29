import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
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
import { useItemContext } from "@/context/ItemsContext";

function TenaEACT() {
	const { items } = useItemContext();

	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedItem] = useState<string>("selecione aqui");

	function setItem(e: Event) {
		const target = e.target as HTMLDivElement;
		setSelectedItem(target.textContent ?? "unknown");
	}

	return (
		<div className="flex flex-col gap-8 max-w-2xl m-auto mt-10 h-vh w-fit">
			<div className="inline-flex gap-9 items-center">
				<h1 className="text-2xl font-bold w-full">
					Exposição a Compostos químicos
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
			<div className="flex flex-col gap-6">
				<div className="inline-flex gap-5 items-center">
					<div className="inline-flex space-x-3 items-center justify-between">
						<Label className="font-bold">
							Concentração de toxicidade limite:
						</Label>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<div className="rounded-full bg-black w-8 h-8 inline-flex justify-center items-center">
										<QuestionMarkIcon className="text-white" />
									</div>
								</TooltipTrigger>
								<TooltipContent sideOffset={0} className="bg-green-400">
									<p className="text-md text-black">
										Texto a ser posto no tooltip
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<Input className="w-20" type="number" />
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
								<DropdownMenuItem onSelect={setItem}>
									grama/Litro (g/L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									mg/L (mg/L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol/Litro (Mol/L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="inline-flex gap-5 items-center justify-between">
					<div className="inline-flex space-x-3 items-center w-[272px] justify-between">
						<Label className="font-bold">tempo de exposição: </Label>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<div className="rounded-full bg-black w-8 h-8 inline-flex justify-center items-center ">
										<QuestionMarkIcon className="text-white" />
									</div>
								</TooltipTrigger>
								<TooltipContent sideOffset={0} className="bg-green-400">
									<p className="text-md text-black">
										Texto a ser posto no tooltip
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<Input className="w-20" type="number" />
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
								<DropdownMenuItem onSelect={setItem}>
									grama/Litro (g/L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									mg/L (mg/L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol/Litro (Mol/L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
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

export { TenaEACT };
