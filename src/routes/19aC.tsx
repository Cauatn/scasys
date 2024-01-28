import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlusIcon } from "@radix-ui/react-icons";

function NineTeenaC() {
	return (
		<div className="flex flex-col gap-8 max-w-2xl m-auto mt-10 h-vh w-fit">
			<div className="inline-flex gap-9 items-center">
				<div>Ocorrência de catálise</div>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<PlusIcon className="bg-gray-300 size-8 rounded-full" />
						</TooltipTrigger>
						<TooltipContent sideOffset={0} className="bg-green-400">
							<p className="text-md">Texto a ser posto no tooltip</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div className="flex flex-col gap-6">
				<div className="inline-flex gap-5 items-center">
					<Label className="font-bold w-64">
						Duração (tempo) de reação
						<br />
						química <strong className="text-red-400">COM</strong> a catálise
					</Label>
					<Input className="max-w-40" type="number" />
					<div className="inline-flex items-center gap-2 w-[434px] justify-end">
						<Label htmlFor="Fontb">Fonte: </Label>
						<Input
							type="Fontb"
							className="pl-2 h-8 max-w-80"
							id="text"
							placeholder="fonte bibliográfica"
						/>
					</div>
				</div>
				<div className="inline-flex gap-5">
					<Label className="font-bold w-64">
						Duração (tempo) de reação
						<br />
						química <strong className="text-red-400">SEM</strong> a catálise
					</Label>
					<Input className="max-w-40" type="number" />
					<div className="inline-flex items-center gap-2 w-[434px] justify-end">
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
		</div>
	);
}

export { NineTeenaC };
