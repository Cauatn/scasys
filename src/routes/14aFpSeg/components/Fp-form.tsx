import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	QuestionMarkIcon,
	TriangleDownIcon,
	TriangleUpIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

function Fpform() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedItem] = useState<string>("selecione aqui");

	function setItem(e: Event) {
		const target = e.target as HTMLDivElement;
		setSelectedItem(target.textContent ?? "unknown");
	}
	return (
		<div className="flex flex-col space-y-4">
			<div className="inline-flex space-x-8 items-center justify-start">
				<Label className="font-bold w-28">Quantidade: </Label>
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
					<DropdownMenuContent className="w-32">
						<DropdownMenuGroup>
							<DropdownMenuItem onSelect={setItem}>
								Kilograma (Kg)
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>grama (g)</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Litro (L)</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Mol (mol)</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<div className="relative">
					<Label className="font-bold absolute -top-11 w-40">
						temperatura do ambiente
					</Label>
					<Input className="w-20" type="number" />
				</div>
			</div>
			<div className="inline-flex space-x-8 items-center justify-start">
				<Label className="font-bold w-28">Pressão do gás: </Label>
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
					<DropdownMenuContent className="w-32">
						<DropdownMenuGroup>
							<DropdownMenuItem onSelect={setItem}>
								Kilograma (Kg)
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>grama (g)</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Litro (L)</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Mol (mol)</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="inline-flex space-x-8 items-center justify-start">
				<Label className="font-bold w-28">Pressão do ar: </Label>
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
					<DropdownMenuContent className="w-32">
						<DropdownMenuGroup>
							<DropdownMenuItem onSelect={setItem}>
								Kilograma (Kg)
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>grama (g)</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Litro (L)</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>Mol (mol)</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<div className="relative">
					<Label className="font-bold absolute -top-11 w-40">
						temperatura do composto
					</Label>
					<Input className="w-20" type="number" />
				</div>
			</div>
			<div className="inline-flex space-x-3 items-center justify-start">
				<Label className="font-bold">Estado do gás: </Label>
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
					<DropdownMenuContent className="w-32">
						<DropdownMenuGroup>
							<DropdownMenuItem onSelect={setItem}>comprimido</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={setItem}>rarefeito</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

export { Fpform };
