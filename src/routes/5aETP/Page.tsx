import { Button } from "@/components/ui/button"

import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@radix-ui/react-icons"

import { useNavigate } from "react-router-dom"

import NextPageButton from "@/components/next-page-button"
import { useExpContext } from "@/context/ExperimentoContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const InvSchema = z.object({
  stageName: z.string(),
  reps: z.string().transform(Number),
})

type InvSchema = z.infer<typeof InvSchema>

function FiveaETP() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const navigate = useNavigate()

  const { setNewEtapa, currentPhase } = useExpContext()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    setNewEtapa(data.stageName, currentPhase)

    navigate("/inventory/3")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex justify-center">
        <div className="flex w-full max-w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div className="inline-flex ">
            <h1 className="w-full text-2xl font-bold"> Fase de Inventário</h1>
            <span className="text-xl text-gray-500">{currentPhase}</span>
          </div>
          <div className="max-w-[300px]">
            <Input
              placeholder="Forneça o nome para etapa"
              required
              {...register("stageName")}
            />
          </div>
          <div className="inline-flex space-x-2">
            <div className="inline-flex w-full flex-wrap content-center items-center justify-between gap-3">
              <div className="inline-flex items-center justify-start">
                <label className="w-44" htmlFor="rep">
                  Número de repetições da etapa procedimental:
                </label>
                <Input
                  id="rep"
                  type="number"
                  className="w-16"
                  min="1"
                  required
                  {...register("reps")}
                />
              </div>
              <div className="space-x-2">
                <span>Adicionar etapa procedimental?</span>
                <Button className="rounded-full bg-green-500 p-3">
                  <PlusIcon className="p-0" />
                </Button>
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

export { FiveaETP }

