import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectContent } from "@radix-ui/react-select"
import { SVGProps, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { JSX } from "react/jsx-runtime"

import NextPageButton from "@/components/next-page-button"
import Radio from "@/components/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const SegSchema = z.object({
  chemComposition: z.string(),
  maxCorrosionRate: z.string().transform(Number),
  maxCorrosionRateUnity: z.string(),
  temp: z.string().transform(Number),
  tempUnity: z.string(),
  corrosiveActivity: z.string(),
  bibliographicSource: z.string(),
})

type SegSchema = z.infer<typeof SegSchema>

export default function SeventeenFcSeg() {
  const checkboxes = [
    {
      label: "S",
      value: "Sim",
      id: "sim",
    },
    {
      label: "N",
      value: "Não",
      id: "nao",
    },
  ]
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(SegSchema),
  })
  const [corrosiveActivity, setCorrosiveActivity] = useState("Não")

  const navigate = useNavigate()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ps/6")
  }

  useEffect(() => {
    setValue("corrosiveActivity", corrosiveActivity)
  }, [corrosiveActivity, setValue])

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex h-full flex-col justify-between px-8 xl:px-0"
    >
      <div className="mb-4 flex justify-center space-y-4">
        <div className="flex w-full flex-col space-y-4 xl:w-1/2">
          <div className="mb-6 space-y-2">
            <h1 className="w-full text-2xl font-bold">Segurança</h1>
            <div className="flex items-center justify-between">
              <label
                className="flex w-full justify-between text-sm text-gray-500"
                htmlFor="corrosion-factor"
              >
                Fator de corrosividade
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Composto Químico
              </Label>
              <Select
                required
                onValueChange={(value) => setValue("chemComposition", value)}
              >
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Selecione o composto" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-rate"
              >
                Taxa máxima de corrosão
              </label>

              <div className="inline-flex items-center space-x-4">
                <Input
                  id="corrosion-rate"
                  placeholder="Insira aqui"
                  className="max-w-28"
                  type="number"
                  required
                  {...register("maxCorrosionRate")}
                />
                <Select
                  onValueChange={(value) =>
                    setValue("maxCorrosionRateUnity", value)
                  }
                >
                  <SelectTrigger id="unity">
                    <SelectValue placeholder="Unidade" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Kg">Kg</SelectItem>
                    <SelectItem value="g">g</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="mol">mol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="temperature"
              >
                Temperatura
              </label>
              <div className="inline-flex items-center space-x-4">
                <Input
                  id="temperature"
                  placeholder="Insira aqui"
                  className="max-w-28"
                  type="number"
                  {...register("temp")}
                />
                <Select onValueChange={(value) => setValue("tempUnity", value)}>
                  <SelectTrigger id="temp">
                    <SelectValue placeholder="Unidade" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="K">Kelvin</SelectItem>
                    <SelectItem value="C">°C</SelectItem>
                    <SelectItem value="Fah">Fah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <Radio
            label="Apresenta atividade corrosiva em alumínio ou aço?"
            defaultValue="Não"
            checkboxes={checkboxes}
            changeValueAction={(value) => setCorrosiveActivity(value)}
          />
          <div className="flex w-full flex-col space-y-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="bibliographic-source"
            >
              Fonte bibliográfica
            </label>
            <Input
              id="bibliographic-source"
              placeholder="Digite a fonte bibliográfica"
              type="text"
              required
              {...register("bibliographicSource")}
            />
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}

function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{""}</title>
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
