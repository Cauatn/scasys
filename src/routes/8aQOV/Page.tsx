import { Button } from "@/components/ui/button"
import { useItemContext } from "@/context/ItemsContext"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { ItemsTable } from "@/components/Items-table"
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import {
  PlusIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@radix-ui/react-icons"

export default function EightaETP() {
  const [isOpen, setIsOpen] = useState(false)
  const [quantityOrValue, setQuantityOrValue] = useState(1)
  const [selectedValue, setSelectedItem] = useState<string>("selecione aqui")

  const { items, adicionarItem } = useItemContext()

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement
    setSelectedItem(target.textContent ?? "unknown")
  }
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <h1 className="w-full text-2xl font-bold">Fase de Inventário</h1>
          <div className="mb-4 mt-4 flex flex-col gap-4 ">
            {Array.from({ length: quantityOrValue }, (_, index) => (
              <div
                className="flex flex-col gap-3"
                key={index + quantityOrValue}
              >
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
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      className="flex min-w-32 flex-row justify-between gap-1 rounded-md border pl-2 pr-2"
                    >
                      <Button
                        variant="outline"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {selectedValue}
                        {isOpen ? (
                          <TriangleDownIcon className="size-6" />
                        ) : (
                          <TriangleUpIcon className="size-6" />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32">
                      <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={setItem}>
                          Kilograma (Kg)
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={setItem}>
                          grama (g)
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={setItem}>
                          Litro (L)
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={setItem}>
                          Mol (mol)
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
              <Link to={"/inventory/1"}>
                <Button
                  onClick={() => {
                    adicionarItem()
                  }}
                >
                  Sim
                </Button>
              </Link>
              <Link to={"/ppwg"}>
                <Button>Não</Button>
              </Link>
            </div>
            <ItemsTable />
          </div>
        </div>
      </div>
      <div className="mb-6 flex flex-col items-center space-y-2 px-8 xl:mr-8 xl:items-end xl:px-0">
        <Link to={"/ppwg"} className="w-full xl:w-44">
          <Button className="w-full bg-green-500 xl:w-44" type="submit">
            Próximo
          </Button>
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
