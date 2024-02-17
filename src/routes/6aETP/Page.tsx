import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useNavigate } from "react-router-dom"

import NextPageButton from "@/components/next-page-button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useExpContext } from "@/context/ExperimentoContext"

const InvSchema = z.object({
  especificidade: z.string(),
  item: z.string(),
  formula: z.string(),
})

type InvSchema = z.infer<typeof InvSchema>

export function SixaETP() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const navigate = useNavigate()

  const { setNewItem, currentEtapa, currentPhase } = useExpContext()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    setNewItem(data.item, data.especificidade, data.formula, currentEtapa)

    navigate("/inventory/4")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex justify-center">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div className="inline-flex">
            <h1 className="w-full text-2xl font-bold"> Fase de Inventário</h1>
            <span className="text-xl text-gray-500">{currentPhase}</span>
          </div>
          <div className="mb-4 mt-4 flex items-center justify-between gap-4">
            <div className="flex w-full flex-wrap justify-between gap-5">
              <div>
                <Label htmlFor="especificidade">Especificidade:</Label>
                <Input
                  id="especificidade"
                  placeholder="Especificidade"
                  {...register("especificidade")}
                  required
                />
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
          </div>
          <ItemsTable />
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
