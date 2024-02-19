import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusIcon } from "@radix-ui/react-icons"

import NextPageButton from "@/components/next-page-button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const InvSchema = z.object({
  quantidade: z.string().transform(Number),
  unidade: z.string(),
  observacoes: z.string().optional(),
})
type InvSchema = z.infer<typeof InvSchema>

export default function EightaETP() {
  const [isOpen, setIsOpen] = useState(false)
  const [quantityOrValue, setQuantityOrValue] = useState(1)
  const [selectedValue, setSelectedItem] = useState<string>("selecione aqui")
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(InvSchema),
  })

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement
    setSelectedItem(target.textContent ?? "unknown")
  }
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/inventory/5")
  }
  useEffect(() => {
    setValue("unidade", selectedValue)
  }, [selectedValue, setValue])
  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex justify-center">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <h1 className="w-full text-2xl font-bold">Fase de Inventário</h1>
          <div className="mb-4 mt-4 flex w-full flex-col gap-4 ">
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
                    {...register("quantidade")}
                    required
                  />
                  <div className="flex max-w-[300px]">
                    <Select
                      onValueChange={(value) => setValue("unidade", value)}
                      required
                    >
                      <SelectTrigger id="unidade-select">
                        <SelectValue placeholder="Selecione aqui" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="kilograma">
                          Kilograma (kg)
                        </SelectItem>
                        <SelectItem value="grama">Grama (g)</SelectItem>
                        <SelectItem value="litro">Litro (L)</SelectItem>
                        <SelectItem value="mol">Mol (mol)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
              <Label
                htmlFor="Item"
                className="pl-2"
                {...register("observacao")}
              >
                Observações :
              </Label>
              <Textarea {...register("observacoes")} />
            </div>
            <div className="inline-flex w-fit items-center gap-3">
              <Label htmlFor="" className="pl-2">
                Adicionar novo item ao inventario?
              </Label>
              <Link to={"/inventory/1"}>
                <Button onClick={() => {}}>Sim</Button>
              </Link>
              <Link to={"/inventory/5"}>
                <Button>Não</Button>
              </Link>
            </div>
            <ItemsTable />
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
