import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import NextPageButton from "@/components/next-page-button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { useExpContext } from "@/context/ExperimentoContext"
import { Trash2 } from "lucide-react"
import { createInventory } from "@/hooks/create-inventory"
import { v4 as uuidv4 } from "uuid"
import { useConjContext } from "@/context/ConjuntoContext"

const InvSchema = z.object({
  quantitys: z
    .object({
      value: z.number(),
    })
    .array()
    .nonempty(),
  unit: z.string(),
  observation: z.string().optional(),
})
type InvSchema = z.infer<typeof InvSchema>

export default function EightaETP() {
  const [quantityOrValues, setQuantityOrValues] = useState<
    Array<{
      value: GLfloat
    }>
  >([{ value: 0 }])
  const [unit, setUnit] = useState("")
  const [observation, setObservation] = useState("")

  const { handleSubmit, setValue, getValues } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const {
    currentItem,
    setQuantity,
    inventoryStage,
    setListItems,
    currentEtapa,
    currentPhase,
    setInventoryStage,
    setCurrentItem,
    setCurrentQuemicalForm,
    setCurrentEtapa,
  } = useExpContext()

  const navigate = useNavigate()

  const { setResiduos } = useConjContext()

  const createItemData = () => {
    setInventoryStage((prev: any) => {
      const index = prev.findIndex((item: any) => item.stage === currentPhase)

      const etapaIndex = prev[index].etapa.findIndex(
        (item: any) => item.name === currentEtapa
      )
      const elementIndex = prev[index].etapa[etapaIndex].elements.findIndex(
        (element: any) => element.item === currentItem
      )

      let sum = 0
      quantityOrValues.forEach((element: any) => {
        sum += element.value
      })

      prev[index].etapa[etapaIndex].elements[elementIndex].quantity =
        quantityOrValues

      prev[index].etapa[etapaIndex].elements[elementIndex].unit = unit
      prev[index].etapa[etapaIndex].elements[elementIndex].observation =
        observation
      prev[index].etapa[etapaIndex].elements[elementIndex].total = sum

      //novos campos
      prev[index].etapa[etapaIndex].elements[elementIndex].density = 0
      prev[index].etapa[etapaIndex].elements[elementIndex].concentrationInSet =
        0

      if (
        prev[index].etapa[etapaIndex].elements[elementIndex].especifity ===
        "residue"
      ) {
        setResiduos((prev: any) => {
          prev.push({
            item: currentItem,
            quantity: quantityOrValues,
            unit: unit,
            stage: currentEtapa,
            phase: currentPhase,
            total: sum,
            status: "not-selected",
            density: 0,
            concentrationInSet: 0,
          })
          return [...prev]
        })
      }
      return [...prev]
    })
  }

  const handleFormSubmit = (data: any) => {
    createItemData()

    createInventory(inventoryStage)

    navigate("/inventory/5")
  }

  useEffect(() => {
    setValue("quantitys", quantityOrValues)

    setQuantity({
      quantitys: quantityOrValues,
      unit: unit,
      observation: observation,
    })

    setListItems((prev) => {
      const index = prev.findIndex(
        (item: any) =>
          item.items === currentItem && item.currentEtapa === currentEtapa
      )

      let sum = 0
      quantityOrValues.forEach((element: any) => {
        sum += element.value
      })
      prev[index].properties.quantity = quantityOrValues
      prev[index].properties.total = sum
      prev[index].properties.unit = unit
      prev[index].properties.observation = observation

      return [...prev]
    })

    if (quantityOrValues.length === 0) {
      setQuantityOrValues([{ value: 0 }])
    }
  }, [quantityOrValues, unit, observation])

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex justify-between space-x-4 px-6 py-2">
        <div className="flex w-[45%] flex-col gap-5 space-y-4">
          <div className="inline-flex w-full justify-between">
            <h1 className=" text-2xl font-bold">Fase de Inventário</h1>
            <span className="text-xl text-gray-500">{currentItem}</span>
          </div>
          <div className="mb-4 mt-4 flex w-full flex-col gap-4 ">
            {quantityOrValues.map((_, index) => {
              return (
                <div className="flex flex-col gap-3" key={uuidv4()}>
                  <Label htmlFor="quantitade" className="pl-2">
                    Quantidade ou valor:
                  </Label>
                  <div className="inline-flex gap-2">
                    <Input
                      id="quantitade"
                      placeholder="quantidade"
                      type="number"
                      value={quantityOrValues[index].value}
                      onChange={(event) => {
                        setQuantityOrValues((prev: any) => {
                          prev[index].value = parseFloat(event.target.value)
                          return [...prev]
                        })
                      }}
                    />
                    <div>
                      <Select
                        onValueChange={(value) => {
                          setValue("unit", value)
                          setUnit(value)
                        }}
                        defaultValue={getValues("unit")}
                        value={unit}
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
                          <SelectItem value="mL">Mili Litro (mL)</SelectItem>
                          <SelectItem value="kWh">
                            Quilowatt-hora (kWh)
                          </SelectItem>
                          <SelectItem value="undefined">
                            Não informar
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant={"ghost"}
                      className="border"
                      onClick={() => {
                        setQuantityOrValues((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
            <div className="inline-flex content-center items-center justify-start gap-6">
              <Button
                className="rounded-md bg-green-400 p-3"
                type="button"
                onClick={() =>
                  setQuantityOrValues((prev) => [...prev, { value: 0 }])
                }
              >
                Adicionar nova quantidade e(ou) valor
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="Item" className="pl-2">
                Observações :
              </Label>
              <Textarea
                onChange={(event) => setObservation(event.target.value)}
              />
            </div>
            <div className="inline-flex w-fit items-center gap-3">
              <Label htmlFor="" className="pl-2">
                Adicionar novo item ao inventario?
              </Label>
              <Link to={"/inventory/3"}>
                <Button
                  type="submit"
                  onClick={() => {
                    createItemData()
                    setCurrentItem("")
                    setCurrentQuemicalForm("")
                  }}
                >
                  Sim
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Não</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Atenção</DialogTitle>
                    <DialogDescription>
                      Deseja adicionar uma nova etapa ao procedimento ?
                    </DialogDescription>
                    <DialogFooter className="inline-flex justify-end">
                      <Button
                        type="submit"
                        onClick={() => {
                          createItemData()
                          setCurrentEtapa("")
                          navigate("/inventory/2")
                        }}
                      >
                        Sim
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Não</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Atenção</DialogTitle>
                          </DialogHeader>
                          <DialogDescription>
                            Deseja adicionar uma nova Fase ao procedimento ?
                          </DialogDescription>
                          <DialogFooter className="inline-flex justify-end">
                            <Button
                              type="submit"
                              onClick={() => {
                                createItemData()
                                navigate("/inventory/1")
                              }}
                            >
                              Sim
                            </Button>
                            <Button
                              onClick={() => {
                                createItemData()
                                navigate("/inventory/5")
                              }}
                            >
                              Não
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </DialogFooter>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <ItemsTable />
      </div>
      <NextPageButton />
    </form>
  )
}
