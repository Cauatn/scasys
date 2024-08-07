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
import { useState } from "react"

const InvSchema = z.object({
  specificity: z.string(),
  item: z.string(),
  formula: z.string(),
  biodegradable: z.boolean().or(z.undefined()),
  biodegradableTime: z.string().transform(Number).optional(),
  src: z.string().optional(),
  recyclable: z.boolean().optional(),
  isBioDeposited: z.boolean().optional(),
})

type InvSchema = z.infer<typeof InvSchema>

export function SixaETP() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const navigate = useNavigate()

  const {
    setNewItem,
    currentEtapa,
    currentPhase,
    setCurrentItem,
    currentItem,
    setCurrentQuemicalForm,
    currentQuemicalForm,
    setCurrentEspecifity,
    currentEspecifity,
  } = useExpContext()

  const [isDegradable, setIsDegradable] = useState(false)

  const handleFormSubmit = (data: any) => {
    setNewItem(
      data.item,
      data.specificity,
      data.formula,
      data.recyclable,
      data.isBioDeposited,
      data.biodegradable
        ? [
            {
              ft: 28 / data.biodegradableTime,
              src: data.src,
            },
          ]
        : undefined
    )

    setCurrentItem(data.item)
    setCurrentQuemicalForm(data.formula)

    navigate("/inventory/4")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex px-6 py-4">
        <div className="flex w-full flex-col gap-5 space-y-4">
          <div className="inline-flex justify-between">
            <h1 className="w-full text-2xl font-bold">Fase de Inventário</h1>
            <div className="container max-w-fit justify-end space-x-2">
              <span className="text-xl text-gray-500">{currentPhase}</span>
              <span className="text-xl text-gray-500">{currentEtapa}</span>
            </div>
          </div>
          <div className="">
            <div className="mx-auto inline-flex w-full justify-between gap-5">
              <div className="inline-flex space-x-8">
                <div>
                  <div>
                    <Label htmlFor="especificidade">Especificidade :</Label>
                    <SpecificitySelector />
                  </div>
                  <div>
                    <Label htmlFor="Item">Item:</Label>
                    <Input
                      id="Item"
                      placeholder="Item"
                      defaultValue={currentItem}
                      {...register("item")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="Formula">Formula Química:</Label>
                    <Input
                      id="Formula"
                      placeholder="Formula"
                      defaultValue={currentQuemicalForm}
                      {...register("formula")}
                      required
                    />
                  </div>
                </div>
                <div>
                  {isDegradable && (
                    <div>
                      <Label>Tempo de degradação :</Label>
                      <Input
                        id="biodegradable"
                        type="number"
                        placeholder="Digite o tempo de degradação"
                        required
                        {...register("biodegradableTime")}
                      />
                      <Label>Fonte bibliográfica :</Label>
                      <Input
                        id="srcBiodegradable"
                        type="text"
                        placeholder="Fonte do tempo"
                        required
                        {...register("src")}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-end space-y-4">
                <div className="inline-flex items-center justify-end space-x-2">
                  <Label htmlFor="biodegradable">É degradável:</Label>
                  <Input
                    className="h-5 w-5 accent-green-500"
                    type="checkbox"
                    id="biodegradable"
                    {...register("biodegradable")}
                    onChange={(e) => setIsDegradable(e.target.checked)}
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
                <div className="inline-flex items-center justify-end space-x-2">
                  <Label htmlFor="isBioDeposited">É Bio-Depositavel:</Label>
                  <Input
                    className="h-5 w-5 accent-green-500"
                    id="isBioDeposited"
                    {...register("isBioDeposited")}
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

function SpecificitySelector() {
  const { setValue } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const { setCurrentEspecifity } = useExpContext()

  return (
    <Select
      onValueChange={(value) => {
        setValue("specificity", value)
        setCurrentEspecifity(value)
      }}
      required
    >
      <SelectTrigger className="w-80" id="phase-select">
        <SelectValue placeholder="selecione aqui" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="auxiliary">Auxiliar</SelectItem>
        <SelectItem value="reagent">Reagente</SelectItem>
        <SelectItem value="solvent">Solvente</SelectItem>
        <SelectItem value="residue">Resíduo</SelectItem>
        <SelectItem value="water">Água</SelectItem>
        <SelectItem value="product">Produto</SelectItem>
        <SelectItem value="energetic-waste">Gasto Energetico</SelectItem>
        <SelectItem value="electrolyte-support">
          Eletrólito de suporte
        </SelectItem>
        <SelectItem value="aatodo">Catodo</SelectItem>
        <SelectItem value="anodo">Anodo</SelectItem>
        <SelectItem value="gas-emissor">Emissões de Gases</SelectItem>
        <SelectItem value="chemical-compost">Composto Químico</SelectItem>
        <SelectItem value="electric-power-consumption">
          Consumo de Energia Elétrica
        </SelectItem>
        <SelectItem value="others">Outros</SelectItem>
      </SelectContent>
    </Select>
  )
}
