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
import { set, useForm } from "react-hook-form"
import { z } from "zod"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InvSchema = z.object({
  phase: z.string(),
})

type InvSchema = z.infer<typeof InvSchema>

export default function FouraF() {
  const { handleSubmit, setValue } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const { setNewPhase, currentPhase } = useExpContext()
  const [isIntermediary, setIsIntermediary] = useState(false)

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
        <div className="flex w-full max-w-full flex-col gap-5 space-y-2 xl:w-1/2">
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
              onValueChange={(value) => {
                if (value !== "intermediaria") {
                  setValue("phase", value)
                  setIsIntermediary(false)
                } else {
                  setIsIntermediary(true)
                }
              }}
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
          {isIntermediary && (
            <div className="min-h-fit">
              <Label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-factor"
              >
                Nome da fase intermediaria
              </Label>
              <Input
                className="max-w-[350px]"
                onChange={(e) => setValue("phase", e.target.value)}
                required
              />
            </div>
          )}
          <Button className="w-full max-w-[350px] bg-green-500 text-white">
            <PlusIcon />
            <span>Adicionar fase intermediaria</span>
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
