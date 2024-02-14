import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CircleIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

export default function Fifeteen() {
  return (
    <>
      <div className="p-4">
        <div className="flex w-full flex-col gap-5 space-y-4">
          <div>
            <div className="mb-6 space-y-2">
              <h1 className="w-full text-2xl font-bold">Segurança</h1>
              <div className="flex items-center justify-between">
                <label
                  className="flex w-full justify-between text-sm text-gray-500"
                  htmlFor="corrosion-factor"
                >
                  Fator risco de incêndio
                </label>
                <CircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
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
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Apresentará risco de incêndio?
              </label>
              <div className="flex space-x-2">
                <ToggleGroup
                  type="single"
                  defaultValue="n"
                  className="space-x-1"
                >
                  <ToggleGroupItem
                    value="s"
                    className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
                  >
                    S
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="n"
                    className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
                  >
                    N
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="mb-4 flex w-full flex-col space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="enthalpy"
                >
                  Entalpia do processo associado:
                </label>
                <div className="inline-flex w-full space-x-4">
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
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-1"
                >
                  Fonte bibliográfica:
                </label>
                <Input
                  id="bibliographic-source-1"
                  placeholder="Fonte bibliográfica"
                />
              </div>
            </div>
            <div className="mb-4 flex w-full flex-col space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="explosion-limit"
                >
                  Limite inferior de explosividade:
                </label>
                <div className="inline-flex w-full items-center space-x-1">
                  <Input id="explosion-limit" placeholder="Limite" />
                  <p className="font-bold">%</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-1"
                >
                  Fonte bibliográfica:
                </label>
                <Input
                  id="bibliographic-source-1"
                  placeholder="Fonte bibliográfica"
                />
              </div>
            </div>
            <div className="mb-4 flex w-full flex-col space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="flash-point"
                >
                  Ponto de fulgor:
                </label>
                <div className="inline-flex w-full space-x-4">
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
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-1"
                >
                  Fonte bibliográfica:
                </label>
                <Input
                  id="bibliographic-source-1"
                  placeholder="Fonte bibliográfica"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-start   ">
              <p className="mb-2 text-sm text-gray-600">
                Item 1 - preferencial
              </p>
              <p className="mb-2 text-sm text-gray-600">
                Item 2 - preenchido se não houver dados do item 1
              </p>
              <p className="mb-4 text-sm text-gray-600">
                Item 3 - preenchido se não houver item 1 e 2
              </p>
            </div>
          </div>
        </div>
        <Link to={"/ps/4"} className="flex justify-end">
          <Button className="w-44 bg-green-400">Proxima</Button>
        </Link>
      </div>
    </>
  )
}
