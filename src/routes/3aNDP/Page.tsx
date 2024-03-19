import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

import { Label } from "@radix-ui/react-dropdown-menu"

import { useNavigate } from "react-router-dom"

import NextPageButton from "@/components/next-page-button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useExpContext } from "@/context/ExperimentoContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { createExperiment } from "@/hooks/create-experiment"

const NmSchema = z.object({
  procedureName: z.string().nonempty("O nome do procedimento é obrigatório"),
  calculusMethod: z.string().nonempty("O modo de cálculo é obrigatório"),
})

type NmSchema = z.infer<typeof NmSchema>

export default function TrheeaNDP() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(NmSchema),
  })

  const navigate = useNavigate()

  const { setExperimentoMetaData } = useExpContext()

  const handleFormSubmit = (data: any) => {
    setExperimentoMetaData(data.procedureName, data.calculusMethod)

    createExperiment({
      autor: "autor",
      autor_id: "autor_id",
      name_of_experiment: data.procedureName,
      modo_de_calculo: data.calculusMethod,
    })

    navigate("/inventory/1")
  }

  return (
    <>
      <form
        className="flex h-full flex-col justify-between px-8 xl:px-0"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex w-full flex-col gap-5 p-4 xl:gap-5 ">
          <div className="space-y-4">
            <div className="w-full max-w-2xl">
              <Label className="mb-3 font-bold">
                Forneça um nome para o procedimento, a ser avaliado:
              </Label>
              <Input
                placeholder="Forneça um nome"
                className="h-9 w-full pl-2"
                {...register("procedureName")}
                required
              />
            </div>
            <div className="flex w-full max-w-2xl flex-col justify-between gap-4">
              <p>Escolha um modo de cálculo:</p>
              <Select
                onValueChange={(value) => setValue("calculusMethod", value)}
                required
              >
                <SelectTrigger className="flex w-full flex-row justify-between gap-1 rounded-md border pl-2 pr-2">
                  <SelectValue placeholder="Selecione o modo de cálculo" />
                </SelectTrigger>
                <SelectContent className="w-48">
                  <SelectItem value="Reducionista">Reducionista</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="Guiado">Guiado</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="Expandido">Expandido</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="Exaustivo">Exaustivo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex h-full w-full max-w-2xl flex-col justify-between">
            <Card className="w-full">
              <CardHeader className="flex content-start items-start justify-start">
                <CardTitle className="">Exemplos:</CardTitle>
                <CardDescription className="">
                  Síntese de polietileno - Reducionista
                </CardDescription>
                <CardDescription className="">
                  Isolamento do ácido fórmico - Guiado
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <NextPageButton />
      </form>
    </>
  )
}
