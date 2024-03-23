import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useNavigate } from "react-router-dom"

import NextPageButton from "@/components/next-page-button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useExpContext } from "@/context/ExperimentoContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const InvSchema = z.object({
  specificity: z.string(),
  item: z.string(),
  formula: z.string(),
  biodegradable: z.boolean(),
  recyclable: z.boolean(),
})

type InvSchema = z.infer<typeof InvSchema>

export function SixaETP() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const navigate = useNavigate()

  const { setNewItem, currentEtapa, currentPhase } = useExpContext()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    setNewItem(
      data.item,
      data.specificity,
      data.formula,
      currentEtapa,
      currentPhase
    )

    navigate("/inventory/4")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex px-6 py-4">
        <div className="flex w-full flex-col gap-5 space-y-4">
          <div className="inline-flex">
            <h1 className="w-full text-2xl font-bold"> Fase de Inventário</h1>
            <span className="text-xl text-gray-500">{currentPhase}</span>
          </div>
          <div className="">
            <div className="mx-auto inline-flex w-full  justify-between gap-5">
              <div>
                <div>
                  <Label htmlFor="especificidade">Especificidade:</Label>
                  <Select
                    onValueChange={(value) => {
                      setValue("specificity", value)
                    }}
                    required
                  >
                    <SelectTrigger className="w-80" id="phase-select">
                      <SelectValue placeholder="selecione aqui" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="reagent">Reagente</SelectItem>
                      <SelectItem value="solvent">Solvente</SelectItem>
                      <SelectItem value="residue">Resíduo</SelectItem>
                      <SelectItem value="water">Água</SelectItem>
                      <SelectItem value="product">Produto</SelectItem>
                      <SelectItem value="chemical-compost">
                        Composto Químico
                      </SelectItem>
                      <SelectItem value="electric-power-consumption">
                        Consumo de Energia Elétrica
                      </SelectItem>
                      <SelectItem value="others">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="Item">Item:</Label>
                  <Input
                    id="Item"
                    placeholder="Item"
                    {...register("item")}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="Formula">Formula Química:</Label>
                  <Input
                    id="Formula"
                    placeholder="Formula"
                    {...register("formula")}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end space-y-4">
                <div className="inline-flex items-center justify-end space-x-2">
                  <Label htmlFor="biodegradable">É biodegradável:</Label>
                  <Input
                    className="h-5 w-5 accent-green-500"
                    type="checkbox"
                    id="biodegradable"
                    {...register("biodegradable")}
                  />
                </div>
                <div className="inline-flex items-center justify-end space-x-2">
                  <Label htmlFor="recyclable">É Reciclável:</Label>
                  <Input
                    className="h-5 w-5 accent-green-500"
                    id="recyclable"
                    {...register("recyclable")}
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
          <ItemsTable />
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
