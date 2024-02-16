import { Button } from "@/components/ui/button"
import { useItemContext } from "@/context/ItemsContext"

import { ItemsTable } from "@/components/Items-table"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@radix-ui/react-icons"

import { useNavigate } from "react-router-dom"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const InvSchema = z.object({
  etapaNome: z.string(),
  repeticoes: z.string().transform(Number),
})

type InvSchema = z.infer<typeof InvSchema>

function FiveaETP() {
  const { setItemEtapa } = useItemContext()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(InvSchema),
  })

  const navigate = useNavigate()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/inventory/3")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex justify-center">
        <div className="flex w-full max-w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <h1 className="w-full text-2xl font-bold">Fase de Inventário</h1>
          <div className="max-w-[300px]">
            <Input
              placeholder="Forneça o nome para etapa"
              required
              {...register("etapaNome")}
            />
          </div>
          <div className="inline-flex space-x-2">
            <div className="inline-flex w-full flex-wrap content-center items-center justify-between gap-3">
              <div className="inline-flex items-center justify-start">
                <label className="w-44" htmlFor="rep">
                  Número de repetições :
                </label>
                <Input
                  id="rep"
                  type="number"
                  className="w-16"
                  min="1"
                  required
                  {...register("repeticoes")}
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
      <div className="mb-6 flex flex-col items-center space-y-2 xl:mr-8 xl:items-end">
        <Button className="w-full bg-green-500 xl:w-44" type="submit">
          Próximo
        </Button>
        <Button
          className="w-full bg-slate-950 xl:hidden"
          type="button"
          onClick={() => navigate(-1)}
        >
          Retornar
        </Button>
      </div>
    </form>
  )
}

export { FiveaETP }

