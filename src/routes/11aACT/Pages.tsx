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
import { Link, useNavigate } from "react-router-dom"

export default function ElevenaACT() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
            <h1 className="w-full text-2xl font-bold">Segurança</h1>
            <div className="mt-2 flex w-full justify-between text-sm text-gray-500">
              <label htmlFor="corrosion-factor">
                Acumulação a compostos tóxicos
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Compostos Químicos
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
                FA
              </label>
              <div className="flex flex-col items-center gap-5 sm:flex sm:flex-row">
                <div className="flex w-full justify-between gap-5">
                  <Select>
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">BCF</SelectItem>
                      <SelectItem value="option2">BAF</SelectItem>
                      <SelectItem value="option3">Kow</SelectItem>
                      <SelectItem value="option4">outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="corrosion-raapresentate"
                    placeholder="Insira aqui"
                    className="min-w-28"
                    type="number"
                  />
                </div>
                <div className="flex w-full justify-between gap-5">
                  <Select>
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">g/L</SelectItem>
                      <SelectItem value="option2">mg/L</SelectItem>
                      <SelectItem value="option3">mol/L</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="secondary">?</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1">
            <div className="mt-4 flex w-full flex-col justify-end space-y-6">
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
      <div className="mb-6 flex flex-col items-center space-y-2 px-8 xl:mr-8 xl:space-y-0 xl:flex-row xl:justify-end xl:px-0">
        <Link to={"/cmh"} className="w-full xl:w-44">
          <Button className="w-full bg-green-500 xl:w-44">Próximo</Button>
        </Link>
        <Button
          className="w-full bg-slate-950 xl:hidden"
          type="button"
          onClick={() => navigate(-1)}
        >
          Retornar
        </Button>
      </div>
    </>
  )
}
