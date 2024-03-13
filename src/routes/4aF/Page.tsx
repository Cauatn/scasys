import { ItemsTable } from "@/components/Items-table"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useNavigate } from "react-router-dom"

import NextPageButton from "@/components/next-page-button"
import { useExpContext } from "@/context/ExperimentoContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PlusIcon } from "lucide-react"

const InvSchema = z.object({
  phase: z.string(),
})

type InvSchema = z.infer<typeof InvSchema>

export default function FouraF() {
  const { handleSubmit, setValue } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const { setNewPhase, currentPhase } = useExpContext()

  const navigate = useNavigate()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    setNewPhase(data.phase)
    navigate("/inventory/2")
  }

  return (
    <form
      className="flex h-full max-h-[1000px] flex-col justify-between p-4"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex">
        <div className="flex w-full max-w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div className="">
            <h1 className="text-2xl font-bold">Fase de Inventário</h1>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="corrosion-factor"
            >
              Identifique a fase que está sendo realizada
            </label>
          </div>
          <div className="max-w-[350px]">
            <Select
              onValueChange={(value) => setValue("phase", value)}
              required
            >
              <SelectTrigger id="phase-select">
                <SelectValue placeholder="selecione aqui" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="inicial">Inicial</SelectItem>
                <SelectItem value="intermediaria">Intermediária</SelectItem>
                <SelectItem value="final">Final</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full max-w-[350px] bg-green-500 text-white">
            <PlusIcon></PlusIcon> <span>Adicionar fase intermediaria</span>
          </Button>
        </div>
        <div className="h-full max-h-[600px]">
          <ItemsTable />
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
