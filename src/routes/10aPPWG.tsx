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

function TenaPPWG() {
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
				<div>
					Problemática da Prevenção de geração <br /> Resíduos
				</div>
			</div>
			<div className="flex flex-col gap-6">
				<div className="inline-flex gap-5 items-center">
					<div className="inline-flex space-x-3 items-center w-24 justify-between">
						<Label className="font-bold">mmr: </Label>
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
						<DropdownMenuContent className="w-32">
							<DropdownMenuGroup>
								<DropdownMenuItem onSelect={setItem}>
									Kilograma (Kg)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									grama (g)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Litro (L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol (mol)
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
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
								{items.map((elemnt) => {
									return (
										<>
											<DropdownMenuItem onSelect={setItem} key={elemnt.Item}>
												{elemnt.Item}
											</DropdownMenuItem>
											<DropdownMenuSeparator />
										</>
									);
								})}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="inline-flex gap-5 items-center">
					<div className="inline-flex space-x-3 items-center w-24 justify-between">
						<Label className="font-bold">mtad: </Label>
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
						<DropdownMenuContent className="w-32">
							<DropdownMenuGroup>
								<DropdownMenuItem onSelect={setItem}>
									Kilograma (Kg)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									grama (g)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Litro (L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol (mol)
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
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
									{items.map((elemnt) => {
										return (
											<>
												<DropdownMenuItem onSelect={setItem} key={elemnt.Item}>
													{elemnt.Item}
												</DropdownMenuItem>
												<DropdownMenuSeparator />
											</>
										);
									})}
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</DropdownMenu>
				</div>
				<div className="inline-flex gap-5 items-center">
					<div className="inline-flex space-x-3 items-center w-24 justify-between">
						<Label className="font-bold">f: </Label>
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
						<DropdownMenuContent className="w-32">
							<DropdownMenuGroup>
								<DropdownMenuItem onSelect={setItem}>
									Kilograma (Kg)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									grama (g)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Litro (L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol (mol)
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
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
								{items.map((elemnt) => {
									return (
										<>
											<DropdownMenuItem onSelect={setItem} key={elemnt.Item}>
												{elemnt.Item}
											</DropdownMenuItem>
											<DropdownMenuSeparator />
										</>
									);
								})}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="inline-flex gap-5 items-center ">
					<div className="inline-flex space-x-3 items-center w-24 justify-between">
						<Label className="font-bold">mtdr: </Label>
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
						<DropdownMenuContent className="w-32">
							<DropdownMenuGroup>
								<DropdownMenuItem onSelect={setItem}>
									Kilograma (Kg)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									grama (g)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Litro (L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol (mol)
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
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
								{items.map((elemnt) => {
									return (
										<>
											<DropdownMenuItem onSelect={setItem} key={elemnt.Item}>
												{elemnt.Item}
											</DropdownMenuItem>
											<DropdownMenuSeparator />
										</>
									);
								})}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="inline-flex gap-5 items-center">
					<div className="inline-flex space-x-3 items-center w-24 justify-between">
						<Label className="font-bold">td: </Label>
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
						<DropdownMenuContent className="w-32">
							<DropdownMenuGroup>
								<DropdownMenuItem onSelect={setItem}>
									Kilograma (Kg)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									grama (g)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Litro (L)
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={setItem}>
									Mol (mol)
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
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
								{items.map((elemnt) => {
									return (
										<>
											<DropdownMenuItem onSelect={setItem} key={elemnt.Item}>
												{elemnt.Item}
											</DropdownMenuItem>
											<DropdownMenuSeparator />
										</>
									);
								})}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="inline-flex items-center gap-2 w-[434px] justify-start">
					<Label htmlFor="Fontb">Fonte: </Label>
					<Input
						type="Fontb"
						className="pl-2 h-8 max-w-80"
						id="text"
						placeholder="fonte bibliográfica"
					/>
				</div>
			</div>
		</div>
	);
}

export { TenaPPWG };
