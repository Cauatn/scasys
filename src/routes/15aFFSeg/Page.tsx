import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Fifeteen() {
	return (
		<div className="bg-white p-6 max-w-4xl m-auto h-screen ">
			<div className="flex items-center space-x-4 mb-6 ">
				<Button className="flex items-center space-x-2" variant="ghost">
					<ArrowLeftIcon className="w-5 h-5" />
					<span>Retornar</span>
				</Button>
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">SCASYS</h1>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-8 mt-6">
				<div>
					<div className="mb-6 space-y-2">
						<h2 className="text-lg font-semibold text-gray-900">Segurança</h2>
						<div className="flex items-center justify-between">
							<label
								className="text-sm font-medium text-gray-700"
								htmlFor="corrosion-factor"
							>
								Fator risco de incêndio
							</label>
							<CircleIcon className="h-5 w-5 text-gray-400" />
						</div>
					</div>
					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="chemical-composition"
						>
							Composto químico:
						</label>
						<Select>
							<SelectTrigger id="chemical-composition">
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectItem value="option1">Option 1</SelectItem>
								<SelectItem value="option2">Option 2</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Apresentará risco de incêndio?
						</label>
						<div className="flex space-x-2">
							<ToggleGroup type="single" defaultValue="n" className="space-x-1">
								<ToggleGroupItem
									value="s"
									className="data-[state=on]:bg-green-400 w-10 h-10 border rounded-md"
								>
									S
								</ToggleGroupItem>
								<ToggleGroupItem
									value="n"
									className="data-[state=on]:bg-green-400 w-10 h-10 border rounded-md"
								>
									N
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
					</div>
					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="enthalpy"
						>
							Entalpia do processo associado:
						</label>
						<div className="inline-flex space-x-4">
							<Input id="enthalpy" placeholder="Entalpia" />
							<Select>
								<SelectTrigger id="residue-set">
									<SelectValue placeholder="Unidade" />
								</SelectTrigger>
								<SelectContent position="popper">
									<SelectItem value="option1">Kg</SelectItem>
									<SelectItem value="option2">g</SelectItem>
									<SelectItem value="option3">L</SelectItem>
									<SelectItem value="option4">mol</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="explosion-limit"
						>
							Limite inferior de explosividade:
						</label>
						<div className="inline-flex items-center space-x-4">
							<Input id="explosion-limit" placeholder="Limite" />
							<p>%</p>
						</div>
					</div>
					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="flash-point"
						>
							Ponto de fulgor:
						</label>
						<div className="inline-flex space-x-4">
							<Input id="flash-point" placeholder="Ponto de fulgor" />
							<Select>
								<SelectTrigger id="residue-set">
									<SelectValue placeholder="Unidade" />
								</SelectTrigger>
								<SelectContent position="popper">
									<SelectItem value="option1">Kg</SelectItem>
									<SelectItem value="option2">g</SelectItem>
									<SelectItem value="option3">L</SelectItem>
									<SelectItem value="option4">mol</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between">
					<div className="flex flex-col justify-start mt-20   ">
						<p className="text-sm text-gray-600 mb-2">item 1 - preferencial</p>
						<p className="text-sm text-gray-600 mb-2">
							item 2 - preenchido se não houver dados do item 1
						</p>
						<p className="text-sm text-gray-600 mb-4">
							item 3 - preenchido se não houver item 1 e 2
						</p>
					</div>
					<div>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-700 mb-1"
								htmlFor="bibliographic-source-1"
							>
								Fonte bibliográfica:
							</label>
							<Input
								id="bibliographic-source-1"
								placeholder="Fonte bibliográfica"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-700 mb-1"
								htmlFor="bibliographic-source-2"
							>
								Fonte bibliográfica:
							</label>
							<Input
								id="bibliographic-source-2"
								placeholder="Fonte bibliográfica"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-700 mb-1"
								htmlFor="bibliographic-source-3"
							>
								Fonte bibliográfica:
							</label>
							<Input
								id="bibliographic-source-3"
								placeholder="Fonte bibliográfica"
							/>
						</div>
					</div>
				</div>
			</div>
			<Link to={""} className="flex justify-end">
				<Button className="bg-[#4CAF50] text-white">Proxima</Button>
			</Link>
		</div>
	);
}
