import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";
import { SVGProps } from "react";

export default function TwentySevenaCR() {
	return (
		<div className="bg-white p-6 max-w-4xl m-auto h-screen space-y-8">
			<div className="flex items-center space-x-4 mb-6">
				<Button className="flex items-center space-x-2" variant="ghost">
					<ArrowLeftIcon className="w-5 h-5" />
					<span>Retornar</span>
				</Button>
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">SCASYS</h1>
				</div>
			</div>
			<div className="max-w-2xl mx-auto px-6 py-8">
				<div className="flex flex-col lg:flex-row lg:space-x-8">
					<div className="flex-1">
						<div className="mb-6 space-y-2">
							<h2 className="text-lg font-semibold text-gray-900">
								Consumo de recursos
							</h2>
							<div className="flex items-center justify-between">
								<label
									className="text-sm font-medium text-gray-700"
									htmlFor="corrosion-factor"
								>
									{""}
								</label>
								<CircleIcon className="h-5 w-5 text-gray-400" />
							</div>
						</div>
						<div className="flex flex-col space-y-6">
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
							<div className="inline-flex space-x-2 justify-between">
								<div className="flex flex-col space-y-2">
									<label
										className="text-sm font-medium text-gray-700 inline-flex space-x-2 justify-between"
										htmlFor="mtcd"
									>
										<span>mtcd</span>
										<FileQuestionIcon />
									</label>

									<Input id="mtcd" placeholder="Insira aqui" type="text" />
								</div>
								<div className="flex flex-col space-y-2 items-center">
									<label
										className="text-sm font-medium text-gray-700 inline-flex space-x-2"
										htmlFor="mtcd"
									>
										<span>Razao de recursos renovaveis total</span>
										<FileQuestionIcon />
									</label>

									<Input id="mtcd" placeholder="Insira aqui" type="text" />
								</div>
							</div>
							<div className="inline-flex space-x-2 justify-between">
								<div className="flex flex-col space-y-2">
									<label
										className="text-sm font-medium text-gray-700 inline-flex space-x-2 justify-between"
										htmlFor="menup"
									>
										<span>menup</span>
										<FileQuestionIcon />
									</label>
									<Input id="menup" placeholder="Insira aqui" type="text" />
								</div>
								<div className="flex justify-end">
									<Link to={"/28"}>
										<Button className="bg-green-500 text-white mt-2">
											Proximo
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function FileQuestionIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>{""}</title>
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
			<path d="M12 17h.01" />
		</svg>
	);
}
