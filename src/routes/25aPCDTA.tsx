import { Input } from "@/components/ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@radix-ui/react-dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";

function TwentyFivePCTDA() {
	return (
		<div className="flex flex-col gap-8 max-w-2xl m-auto mt-10 h-vh">
			<div className="inline-flex gap-9">
				<div>Consumo e potencial térmico de disposição de água</div>
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
			<div className="flex flex-col gap-4">
				<div className="inline-flex gap-5">
					<Label className="font-bold w-64">
						volume total consumido de água
					</Label>
					<Input className="max-w-40" type="number" />
				</div>
				<div className="inline-flex gap-5">
					<Label className="font-bold w-64">temperatura do ambiente</Label>
					<Input className="max-w-40" type="number" />
				</div>
				<div className="inline-flex gap-5">
					<Label className="font-bold w-64">temperatura da água ambiente</Label>
					<Input className="max-w-40" type="number" />
				</div>
				<div className="inline-flex gap-5">
					<Label className="font-bold w-64">
						temperatura da água descartada
					</Label>
					<Input className="max-w-40" type="number" />
				</div>
			</div>
		</div>
	);
}

export { TwentyFivePCTDA };
