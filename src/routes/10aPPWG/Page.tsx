import { ExpItems, columnsItems } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import NextPageButton from "@/components/next-page-button"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { useExpContext } from "@/context/ExperimentoContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight } from "lucide-react"
import { get_result } from "@/hooks/get_result"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const PpwgSchema = z.object({
  mrr: z.string(),
  mrr_quantity: z.string(),
  mrr_unit: z.string(),
  mtad: z.string(),
  mtad_quantity: z.string(),
  mtad_unit: z.string(),
  mtdr: z.string(),
  mtdr_quantity: z.string(),
  mtdr_unit: z.string(),
  td: z.string(),
  td_quantity: z.string(),
  td_unit: z.string(),
  f: z.string(),
  bibliographical_source_td: z.string(),
})
type PpwgSchema = z.infer<typeof PpwgSchema>

export default function TenaPPWG() {
  const { handleSubmit, setValue, register } = useForm({
    resolver: zodResolver(PpwgSchema),
  })

  const { inventoryStage } = useExpContext()

  const navigate = useNavigate()

  const teste = async () => {
    console.log(JSON.stringify(inventoryStage))
  }

  const handleFormSubmit = (data: any) => {
    //navigate("/etc")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col justify-start px-8 py-4">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-full">
          <div className="pl-24">
            <h1 className="w-full text-2xl font-bold">
              Problematização de Prevenção de Geração de Resíduos
            </h1>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Insira as informações nos campos abaixo para calcular a
                prevenção de geração de resíduos.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">MRR</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="secondary">?</Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] bg-black text-base font-medium">
                    <p>
                      {" "}
                      mrr é a massa de material armazenado para reuso ou
                      efetivamente reciclado, que não foi descartado.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <ShowTable name="MRR" />
                <Input
                  id="mrr"
                  placeholder="MRR"
                  className="w-52 sm:w-20"
                  required
                  {...register("mrr")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Input
                    required
                    onChange={(e) => setValue("mrr_quantity", e.target.value)}
                    placeholder="Quantidade"
                    type="number"
                    className="w-32"
                  />
                  <Select
                    required
                    onValueChange={(value) => setValue("mrr_unit", value)}
                  >
                    <SelectTrigger id="mrr-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">MTAD</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="secondary">?</Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] bg-black text-base font-medium">
                    <p>
                      {" "}
                      mtad é a massa de materiais que foram purificados e cuja
                      disposição no meio ambiente foi realizada no mesmo local
                      de extração de forma a não configurar poluição ambiental.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <ShowTable name="MTAD" />
                <Input
                  id="mtad"
                  placeholder="MTAD"
                  className="w-52 sm:w-20"
                  {...register("mtad")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Input
                    required
                    onChange={(e) => setValue("mtad_quantity", e.target.value)}
                    placeholder="Quantidade"
                    type="number"
                    className="w-32"
                  />

                  <Select
                    required
                    onValueChange={(value) => setValue("mtad_unit", value)}
                  >
                    <SelectTrigger id="mtad-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">MTDR</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="secondary">?</Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] bg-black text-base font-medium">
                    <p>
                      {" "}
                      mtdr é a massa de materiais degradáveis que não são
                      armazenados para reuso nem são reciclados.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <ShowTable name="MTDR" />
                <Input
                  required
                  id="mtdr"
                  placeholder="MTDR"
                  className="w-52 sm:w-20"
                  {...register("mtdr")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Input
                    required
                    onChange={(e) => setValue("mtdr_quantity", e.target.value)}
                    placeholder="Quantidade"
                    type="number"
                    className="w-32"
                  />
                  <Select
                    required
                    onValueChange={(value) => setValue("mtdr_unit", value)}
                  >
                    <SelectTrigger id="mtdr-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextPageButton />
      <button onClick={teste}>teste</button>
    </form>
  )
}

function ShowTable({ name }: { name: string }) {
  const { listItems, selectedRows, setMtadItems, setMtdrItems } =
    useExpContext()

  let data: ExpItems[] = listItems.map((e: any) => {
    return {
      ...e,
    }
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="h-9 w-full max-w-[120px] border text-slate-700 hover:bg-green-300 hover:before:transition-transform"
          variant="secondary"
        >
          selecionar {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex min-h-[500px] max-w-[1000px] flex-col justify-between border-gray-200 bg-gray-100 pt-12">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Aqui vai ficar o nome do experimento</CardTitle>
            <CardDescription>
              Listagem de todos os itens adicionados ao experimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable data={data} columns={columnsItems} />
          </CardContent>
        </Card>
        <DialogFooter className="flex h-fit w-full rounded-b-md border-t ">
          {name === "MTDR" ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="flex items-center justify-between"
                >
                  <p>Avançar</p>
                  <ChevronRight />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[600px] overflow-y-scroll pt-12">
                {selectedRows.map((item, idCard) => {
                  return (
                    <CardComponent
                      name={item.original.items}
                      idCard={idCard}
                      currentEtapa={item.original.currentEtapa}
                      currentPhase={item.original.currentPhase}
                    />
                  )
                })}
              </DialogContent>
            </Dialog>
          ) : (
            <Button
              onClick={() => {
                if (name === "MTAD") {
                  selectedRows.map((item) => {
                    console.log(item.original)
                    setMtadItems(
                      item.original.currentEtapa,
                      item.original.currentPhase,
                      item.original.items
                    )
                  })
                }

                console.log(selectedRows)
              }}
            >
              Adicionar
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function CardComponent({
  name,
  idCard,
  currentEtapa,
  currentPhase,
}: {
  name: any
  idCard: number
  currentEtapa: any
  currentPhase: any
}) {
  const [isOpen, setIsOpen] = useState(true)
  const { setMtdrItems } = useExpContext()

  return (
    isOpen && (
      <Card key={name}>
        <CardHeader>
          <CardTitle>Dados item {name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label>Tempo de degradação</Label>
              <Input
                placeholder="Tempo de degradação"
                id="tempo-de-degradacao"
                defaultValue={0}
                type="number"
              />
              <Label>Fonte bibliográfica</Label>
              <Input placeholder="Fonte bibliográfica" id="fb" />
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="secondary">Cancelar</Button>
              <Button
                variant="secondary"
                onClick={() => {
                  let input = ""
                  let fb = ""

                  document
                    .querySelectorAll("#tempo-de-degradacao")
                    .forEach((e, idInput) => {
                      if (idInput === idCard)
                        input = (e as HTMLInputElement).value
                    })

                  document.querySelectorAll("#fb").forEach((e, idFb) => {
                    if (idFb === idCard) fb = (e as HTMLInputElement).value
                  })

                  setMtdrItems(
                    currentEtapa,
                    currentPhase,
                    name,
                    Number(input),
                    fb
                  )
                  setIsOpen(false)
                }}
              >
                Adicionar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  )
}
