import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { CircleIcon } from "@radix-ui/react-icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useState } from "react"

const AcSchema = z.object({
  enthalpyC: z.string().transform(Number),
  enthalpyS: z.string().transform(Number),
  dtS: z.string().transform(Number),
  bibliographicSource1: z.string().url(),
  bibliographicSource2: z.string().url(),
})

type AcSchema = z.infer<typeof AcSchema>

export default function NineTeenaC() {
  const [hasCatalise, setHasCatalise] = useState(false)

  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(AcSchema),
  })

  const navigate = useNavigate()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/eec/1")
  }

  return (
    <form
      className="m-auto h-screen max-w-4xl space-y-4 bg-white p-6"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="mt-6 grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="mb-6 space-y-2">
            <h2 className="w-full text-2xl font-bold text-gray-900">
              Ocorrência de catálise
            </h2>
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-factor"
              >
                (por breve descrição se houver)
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex space-x-4">
            <Label>Houve no experimento a ocorrência de catálise?</Label>
            <ToggleGroup
              type="single"
              defaultValue="n"
              className="inline-flex space-x-2"
              onValueChange={() => setHasCatalise(!hasCatalise)}
            >
              <ToggleGroupItem
                value="s"
                className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
              >
                S
              </ToggleGroupItem>
              <ToggleGroupItem
                value="n"
                className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
              >
                N
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          {hasCatalise ? (
            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="enthalpy"
              >
                Duração (tempo) da reação química COM catálise :
              </label>
              <div className="inline-flex space-x-4">
                <Input id="enthalpy" placeholder="Tempo" />
                <Select
                  onValueChange={(value) => setValue("enthalpyC", value)}
                  required
                >
                  <SelectTrigger id="etC">
                    <SelectValue placeholder="Unidade" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="H">Horas</SelectItem>
                    <SelectItem value="m">Minutos</SelectItem>
                    <SelectItem value="s">Segundos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="dtS"
              >
                Duração (tempo) da reação química SEM catálise :
              </label>
              <div className="inline-flex items-center space-x-4">
                <Input
                  id="dtS"
                  placeholder="Tempo"
                  type="number"
                  required
                  {...register("dtS")}
                />
                <Select
                  onValueChange={(value) => setValue("enthalpyS", value)}
                  required
                >
                  <SelectTrigger id="etS">
                    <SelectValue placeholder="Unidade" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="H">Horas</SelectItem>
                    <SelectItem value="m">Minutos</SelectItem>
                    <SelectItem value="s">Segundos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-end">
          <div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="bibliographic-source-1"
              >
                Fonte bibliográfica:
              </label>
              <Input
                id="bibliographic-source-1"
                placeholder="Fonte bibliográfica"
                required
                {...register("bibliographicSource1")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-[#4CAF50] text-white" type="submit">
          Proxima
        </Button>
      </div>
    </form>
  )
}
