import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@radix-ui/react-dropdown-menu"
import { CircleIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

export default function TenaECT() {
  return (
    <>
      <div className="flex justify-start">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-full">
          <div>
            <h1 className="w-full text-2xl font-bold">Segurança</h1>
            <div className="mt-2 flex w-full justify-between text-sm text-gray-500">
              <label htmlFor="corrosion-factor">
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
                <Button variant="secondary">?</Button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1">
            <div className="mt-4 flex w-full flex-col justify-end space-y-6">
              <div className="flex flex-col space-y-2">
                <label
                  className="inline-flex justify-between text-sm font-medium text-gray-700"
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
                  <Button variant="secondary">?</Button>
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
      <div className="flex justify-end">
        <Link to={"/atc"} className="flex justify-end">
          <Button className="w-44 bg-green-400">Próximo</Button>
        </Link>
      </div>
    </>
  )
}
