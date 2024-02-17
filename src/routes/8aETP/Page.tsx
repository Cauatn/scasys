import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"

import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, PlusIcon } from "@radix-ui/react-icons"

export default function EightaETP() {
  const [quantityOrValue, setQuantityOrValue] = useState(1)

  return (
    <div className="flex h-full flex-col justify-between px-8 xl:px-0">
      <div className="mb-6 flex items-center space-x-4">
        <Button className="flex items-center space-x-2" variant="ghost">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Retornar</span>
        </Button>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">SCASYS</h1>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h1 className="w-full text-2xl font-bold">Fase de Inventario</h1>
        <div className="mb-4 mt-4 flex flex-col gap-4 ">
          {Array.from({ length: quantityOrValue }, (_, index) => (
            <div className="flex flex-col gap-3" key={index + quantityOrValue}>
              <Label htmlFor="quantitade" className="pl-2">
                Quantidade ou valor:
              </Label>
              <div className="inline-flex gap-2">
                <Input
                  id="quantitade"
                  placeholder="quantitade"
                  className="w-32"
                  type="number"
                />
                <Select>
                  <SelectTrigger className="flex min-w-32 flex-row justify-between gap-1 rounded-md border pl-2 pr-2"></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kg">Kilograma</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="g">Grama</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="L">litro</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="mol">Mol</SelectItem>
                    <SelectSeparator />
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
          <div className="inline-flex content-center items-center justify-start gap-6">
            <span>Adicionar nova quantidade e(ou) valor</span>
            <Button
              className="rounded-full bg-green-400 p-3"
              onClick={() => setQuantityOrValue(quantityOrValue + 1)}
            >
              <PlusIcon className="p-0" />
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="Item" className="pl-2">
              Observações :
            </Label>
            <Textarea />
          </div>
          <div className="inline-flex w-fit items-center gap-3">
            <Label htmlFor="" className="pl-2">
              Adicionar novo item ao inventario?
            </Label>
            <Link to={"/inventario=1"}>
              <Button onClick={() => {}}>Sim</Button>
            </Link>
            <Link to={"/inventario=6"}>
              <Button>Não</Button>
            </Link>
          </div>
        </div>
      </div>
      <ItemsTable />
    </div>
  )
}
