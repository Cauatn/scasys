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
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function SeventeenFcSeg() {
  return (
    <div className="bg-white p-6 max-w-4xl m-auto h-screen space-y-8">
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
                  Fator de corrosividade
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
                  Taxa máxima de corrosão
                </label>

                <div className="inline-flex items-center space-x-4">
                  <Input
                    id="corrosion-rate"
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
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="temperature"
                >
                  Temperatura
                </label>
                <div className="inline-flex items-center space-x-4">
                  <Input
                    id="temperature"
                    placeholder="Insira aqui"
                    className="max-w-28"
                    type="number"
                  />
                  <Select>
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">°C</SelectItem>
                      <SelectItem value="option2">Fah</SelectItem>
                      <SelectItem value="option3">L</SelectItem>
                      <SelectItem value="option4">mol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex ">
            <div className="space-y-6 mt-12 flex flex-col justify-end">
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosive-activity"
                >
                  Apresenta atividade corrosiva em alumínio ou aço?
                </label>
                <div className="flex space-x-4">
                  <Button className="bg-gray-100 text-gray-700 hover:bg-green-500 w-12 h-10">
                    Sim
                  </Button>
                  <Button className="bg-gray-100 text-gray-700 hover:bg-green-500 w-12 h-10">
                    Não
                  </Button>
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
        <div className="mt-8 flex justify-end">
          <Link to={"/ps/6"}>
            <Button className="bg-green-500 text-white">Proximo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
