import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

import { Label } from "@radix-ui/react-dropdown-menu"

import { useNavigate } from "react-router-dom"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const NmSchema = z.object({
  nomeProcedimento: z.string().nonempty("O nome do procedimento é obrigatório"),
  modoCalculo: z.string().nonempty("O modo de cálculo é obrigatório"),
})

type NmSchema = z.infer<typeof NmSchema>

export default function TrheeaNDP() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(NmSchema),
  })

  const navigate = useNavigate()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/inventory/1")
  }

  return (
    <>
      <form
        className="flex h-full flex-col justify-between px-8 xl:px-0"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex w-full flex-col items-center justify-center gap-5 xl:gap-10">
          <div className="max-w-2xl w-full">
            <Label className="mb-3 font-bold">
              Forneça um nome para o procedimento, a ser avaliado:
            </Label>
            <Input
              placeholder="Forneça um nome"
              className="h-9 w-full pl-2"
              {...register("nomeProcedimento")}
              required
            />
          </div>
          <div className="flex flex-col justify-between gap-4 max-w-2xl w-full">
            <p>Escolha um modo de cálculo:</p>
            <Select
              onValueChange={(value) => setValue("modoCalculo", value)}
              required
            >
              <SelectTrigger className="flex w-full flex-row justify-between gap-1 rounded-md border pl-2 pr-2">
                <SelectValue placeholder="Selecione o composto" />
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
          <div className="flex h-full flex-col justify-between max-w-2xl w-full">
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
        <div className="flex justify-end mb-6">
          <Button className="w-44 bg-green-400" type="submit">
            Próximo
          </Button>
        </div>
      </form>
    </>
  )
}
