import { Input } from "@/components/ui/input";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function TenaECT() {
	return (
		<div className="bg-white p-6 max-w-4xl m-auto space-y-8">
			<div className="flex items-center space-x-4 mb-6">
				<Button className="flex items-center space-x-2" variant="ghost">
					<ArrowLeftIcon className="w-5 h-5" />
					<span>Retornar</span>
				</Button>
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">SCASYS</h1>
				</div>
			</div>
			<div className="container mx-auto px-6 py-8">
				<div className="flex flex-col lg:flex-row lg:space-x-8">
					<div className="flex-1">
						<div className="mb-6 space-y-2">
							<h2 className="text-lg font-semibold text-gray-900">Segurança</h2>
							<div className="flex items-center justify-between">
								<label
									className="text-sm font-medium text-gray-700"
									htmlFor="corrosion-factor"
								>
									Exposição a compostos tóxicos
								</label>
								<CircleIcon className="h-5 w-5 text-gray-400" />
							</div>
						</div>
						<div className="space-y-6">
							<div className="flex flex-col space-y-2">
								<Label className="text-sm font-medium text-gray-700">
									Composto Químico
								</Label>
								<Select>
									<SelectTrigger id="residue-set">
										<SelectValue placeholder="Selecione o composto" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="option1">Option 1</SelectItem>
										<SelectItem value="option2">Option 2</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-2">
								<label
									className="text-sm font-medium text-gray-700"
									htmlFor="corrosion-rate"
								>
									Concentração de toxidade limite
								</label>
								<div className="inline-flex items-center space-x-4">
									<Input
										id="corrosion-raapresentate"
										placeholder="Insira aqui"
										className="max-w-28"
										type="number"
									/>
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
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<Button variant="secondary">?</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 flex justify-center">
						<div className="space-y-6 mt-4 flex flex-col justify-end">
							<div className="flex flex-col space-y-2">
								<label
									className="text-sm font-medium text-gray-700 inline-flex justify-between"
									htmlFor="temperature"
								>
									<p>Tempo de exposição</p>
								</label>
								<div className="inline-flex items-center space-x-4">
									<Input
										id="temperature"
										placeholder="Insira aqui"
										className="max-w-32"
										type="number"
									/>
									<Select>
										<SelectTrigger id="residue-set">
											<SelectValue placeholder="Unidade" />
										</SelectTrigger>
										<SelectContent position="popper">
											<SelectItem value="option3">Horas</SelectItem>
											<SelectItem value="option2">Minutos</SelectItem>
											<SelectItem value="option1">Segundos</SelectItem>
										</SelectContent>
									</Select>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<Button variant="secondary">?</Button>
									</div>
								</div>
							</div>
							<div className="flex flex-col space-y-2">
								<label
									className="text-sm font-medium text-gray-700"
									htmlFor="bibliographic-source"
								>
									Fonte bibliográfica
								</label>
								<Input
									id="bibliographic-source"
									placeholder="Digite a fonte bibliográfica"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to={""} className="flex justify-end mx-auto max-w-2xl">
				<Button className="bg-green-500 text-white">Proximo</Button>
			</Link>
		</div>
	);
}
