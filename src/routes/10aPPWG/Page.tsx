import { ExpItems, columnsItems } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import NextPageButton from "@/components/next-page-button"
import { Button } from "@/components/ui/button"
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
import { useExpContext } from "@/context/ExperimentoContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

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

  const [itemsMRR, setItemsMRR] = useState<string[]>([])
  const [itemsMTAD, setItemsMTAD] = useState<string[]>([])
  const [itemsMTDR, setItemsMTDR] = useState<string[]>([])
  const [itemsTD, setItemsTD] = useState<string[]>([])

  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/etc")
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
              <div>
                <Button variant="secondary">?</Button>
              </div>
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
              <div>
                <Button variant="secondary">?</Button>
              </div>
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
              <div>
                <Button variant="secondary">?</Button>
              </div>
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
          <div className="mt-6 w-full pl-24">
            <label
              className="mt-2 block text-sm font-medium text-gray-700"
              htmlFor="fonte-bibliografica"
            >
              Fonte bibliográfica relacionada ao TD
            </label>
            <div className="mt-1">
              <Input
                required
                id="fonte-bibliografica"
                className="max-w-[400px]"
                placeholder="Insira a fonte bibliográfica"
                {...register("bibliographical_source_td")}
              />
            </div>
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}

function ShowTable({ name }: { name: string }) {
  const { listItems, selectedRows, setMrrItems } = useExpContext()

  let data: ExpItems[] = listItems.map((e: any) => {
    return {
      ...e,
      status: "not-selected",
    }
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="h-9 w-20 max-w-[100px] border bg-white text-slate-700 hover:bg-green-300 hover:before:transition-transform"
          variant="secondary"
        >
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-[450px] max-w-[1000px] ">
        <div className="container mx-auto py-10">
          <DataTable columns={columnsItems} data={data} />
        </div>
        <DialogFooter className="flex justify-end px-10">
          <Button
            onClick={() => {
              console.log("linhas selecionadas: ", selectedRows)

              selectedRows.forEach((element: any) => {
                setMrrItems(
                  element.original.currentEtapa,
                  element.original.currentPhase,
                  element.original.items
                )
              })
            }}
          >
            Selecionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
