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
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";

function FeForm() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedItem] = useState<string>("selecione aqui");

	function setItem(e: Event) {
		const target = e.target as HTMLDivElement;
		setSelectedItem(target.textContent ?? "unknown");
	}

	return (
		<div className="inline-flex gap-5 items-center justify-between">
			<div className="inline-flex space-x-3 items-center justify-between">
				<Label className="font-bold">fe: </Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<div className="rounded-full bg-black w-8 h-8 inline-flex justify-center items-center ">
								<QuestionMarkIcon className="text-white" />
							</div>
						</TooltipTrigger>
						<TooltipContent sideOffset={0} className="bg-green-400">
							<p className="text-md text-black">Texto a ser posto no tooltip</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<Input className="w-40" type="number" />
			<div className="relative">
				<Label className="absolute bottom-12 left-3">Unidade de medida</Label>
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
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

export { FeForm };
