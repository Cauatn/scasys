import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CircleIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

function ThirteenaFeSeg() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
            <div className="mb-6 space-y-2">
              <h1 className="w-full text-2xl font-bold">Segurança</h1>
              <div className="flex items-center justify-between">
                <label
                  className="flex w-full justify-between text-sm text-gray-500"
                  htmlFor="corrosion-factor"
                >
                  Fator: explosão potencial
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
            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="quantidade"
              >
                Fe
              </label>
              <div className="flex flex-col items-center gap-5 sm:flex sm:flex-row">
                <div className="flex flex-col w-full gap-4 sm:flex sm:flex-row">
                  <Input
                    id="quantidade"
                    placeholder="Quantidade"
                    type="number"
                    className="w-full sm:w-1/2"
                  />
                  <div className="flex w-full gap-4 sm:w-1/2">
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
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div>
              <div className="mb-4">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-3"
                >
                  Fonte bibliográfica
                </label>
                <Input
                  id="bibliographic-source-3"
                  placeholder="Fontece bibliográfica"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/ps/2"} className="flex justify-end">
        <Button className="w-44 bg-green-400">Proxima</Button>
      </Link>
    </>
  )
}

export { ThirteenaFeSeg }

