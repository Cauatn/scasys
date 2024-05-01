import NextPageButton from "@/components/next-page-button"
import Radio from "@/components/radio-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"

const InvSchema = z.object({
  quant_total: z.string(),
  unidade: z.string(),
  quant_total_nova: z.string(),
  metodo_avaliacao: z.string(),
  observacoes: z.string().optional(),
  quant_reagentes: z.string().optional().transform(Number),
  unidade_reagentes: z.string().optional(),
  quant_interferentes: z.string().optional().transform(Number),
  observations: z.string().optional(),
})
type InvSchema = z.infer<typeof InvSchema>

import { ResidueItem, columnsResidue } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import { useConjContext } from "@/context/ConjuntoContext"
import { useExpContext } from "@/context/ExperimentoContext"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PlusIcon } from "lucide-react"
import { register_bombonas } from "@/hooks/register-bombonas"

export default function EightaPerg() {
  const checkboxes = [
    {
      label: "S",
      value: "Sim",
      id: "sim",
    },
    {
      label: "N",
      value: "Não",
      id: "nao",
    },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const [bombonaResiduos, setBombonaResiduos] = useState<any>([
    {
      name: "Bombona 1",
      bombona: [],
      isToxic: false,
    },
  ])

  const { handleSubmit, setValue, register } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const { residuos } = useConjContext()

  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)

    navigate("/ppwg")
  }

  const [selectedConjunto, setSelectedConjunto] = useState<number>(0)

  const addResidue = (residues: any[], index: number) => {
    setBombonaResiduos((prev: any) => {
      let newBombona = [...prev]
      let array: any[] = []

      residues.forEach((item) => {
        item.status = "selected"

        let aux = {
          quim_component: item.item,
          value: item.total,
          unit: item.unit,
        }

        array.push(aux)
      })

      newBombona[index].bombona = array

      return newBombona
    })
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col justify-between space-y-4 px-8 xl:p-4">
        <h1 className="w-full text-2xl font-bold">Fase de Inventário</h1>
        <div className="flex space-x-4">
          <div className="flex w-full flex-col gap-4 space-y-4 xl:max-w-[50%]">
            <div className="mb-4 grid grid-cols-3 gap-4">
              <Select
                onValueChange={(value) => {
                  setSelectedConjunto(parseInt(value))
                }}
              >
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Conjunto de resíduos na bombona e:" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {bombonaResiduos.map((conjunto: any, index: number) => {
                    return (
                      <SelectItem key={index} value={index.toString()}>
                        {"Conjunto " + (index + 1)}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <Input
                id="total-quantity"
                {...register("quant_total")}
                required
                type="number"
                placeholder="Quantidade total"
              />
              <Select
                onValueChange={(value) => setValue("unidade", value)}
                required
              >
                <SelectTrigger id="unit">
                  <SelectValue
                    placeholder="Unidade de Medida"
                    defaultValue={"kg"}
                  />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="kilograma">Kilogramas</SelectItem>
                  <SelectItem value="grama">Gramas</SelectItem>
                  <SelectItem value="liter">Litros</SelectItem>
                  <SelectItem value="mol">Mols</SelectItem>
                </SelectContent>
              </Select>
              <ShowTable
                addResidue={addResidue}
                bombonaIndex={selectedConjunto}
                bombonas={bombonaResiduos}
              />
            </div>
            <Button
              className="flex w-full items-center space-x-2"
              variant="secondary"
              onClick={() => {
                toast({
                  variant: "default",
                  title: "Novo conjunto Adicionado!",
                  description: "Um novo conjunto de resíduos foi adicionado.",
                  action: (
                    <ToastAction altText="Selecionar">
                      Selecionar Residuos
                    </ToastAction>
                  ),
                })

                setBombonaResiduos((prev: any) => [
                  ...prev,
                  {
                    name: "Bombona " + (prev.length + 1),
                    bombona: [],
                    isToxic: false,
                  },
                ])
              }}
            >
              <PlusIcon className="h-5 w-5" />
              <span>Adicionar novo conjunto de resíduos</span>
            </Button>
          </div>
          <div className="space-y-4 xl:max-w-[50%]">
            <div>
              <Select
                onValueChange={(value) => setValue("quant_total_nova", value)}
                required
              >
                <SelectTrigger id="added-quantity">
                  <SelectValue placeholder="quantidade total nova adicionada" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-center gap-8 sm:flex sm:flex-row sm:justify-between">
              <Label>Qual metodo de avaliação a ser empregado?</Label>
              <div>
                <Select
                  onValueChange={(value) => setValue("metodo_avaliacao", value)}
                  required
                >
                  <SelectTrigger
                    id="added-quantity"
                    className="w-60 sm:max-w-40"
                  >
                    <SelectValue placeholder="Selecione aqui" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="option1">
                      Nas condições experimentais
                    </SelectItem>
                    <SelectItem value="option2">
                      Em condições extremas
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Textarea
              placeholder="Observações"
              {...register("observacoes")}
              className="h-[72px] max-h-[72px]"
            />
          </div>
        </div>
        <Radio
          label="O objetivo do procedimento é a formação de um produto químico ?"
          defaultValue="Sim"
          checkboxes={checkboxes}
          action={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <>
            <div className="flex flex-col md:flex-row">
              <Label className="text-sm md:max-w-60">
                Qual é a quantidade de reagentes efetivamente empregada no
                procedimento?
              </Label>
              <div className="mt-4 flex w-full flex-row space-x-8 md:mt-0 md:w-1/2">
                <div>
                  <Input
                    required
                    type="number"
                    className="max-w-32"
                    {...register("quant_reagentes")}
                  />
                </div>
                <div className="max-w-32">
                  <Select
                    required
                    onValueChange={(value) =>
                      setValue("unidade_reagentes", value)
                    }
                  >
                    <SelectTrigger id="added-quantity">
                      <SelectValue placeholder="Selecione aqui" />
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
            </div>
            <div className="flex items-center space-x-4">
              <Label>
                Quantos interferentes há <br />
                no procedimento?
              </Label>
              <Input
                type="number"
                required
                className="max-w-20"
                {...register("quant_interferentes")}
              />
            </div>
          </>
        )}
      </div>
      <NextPageButton />
      <button
        onClick={() => {
          register_bombonas(bombonaResiduos)
        }}
      >
        TESTAR REGISTRO
      </button>
    </form>
  )
}

function ShowTable({
  addResidue,
  bombonaIndex,
  bombonas,
}: {
  addResidue: (residue: ResidueItem[], index: number) => void
  bombonaIndex: number
  bombonas: any
}) {
  const { selectedRows } = useExpContext()
  const { residuos } = useConjContext()

  let data: ResidueItem[] = residuos

  useEffect(() => {
    console.log("Bombonas atualiazdas:", bombonas)
  }, [bombonas])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="col-span-3 bg-green-400" variant="secondary">
          Adicionar novos resíduos ao conjunto selecionado
        </Button>
      </DialogTrigger>
      <DialogContent className="flex min-h-[500px] max-w-[1000px] flex-col justify-between border-gray-200 bg-gray-100 pt-12">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Aqui vai ficar o nome do experimento</CardTitle>
            <CardDescription>
              Listagem de todos os residuos adicionados ao experimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable data={data} columns={columnsResidue} />
          </CardContent>
        </Card>
        <DialogFooter className="flex h-fit w-full rounded-b-md border-t ">
          {
            <Button
              onClick={() => {
                let FilterRows: any[] = []

                selectedRows.forEach((row) => {
                  FilterRows.push(row.original)
                })

                addResidue(FilterRows, bombonaIndex)
              }}
            >
              Adicionar
            </Button>
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
