import NextPageButton from "@/components/next-page-button"
import Radio from "@/components/radio-group"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

const SecuritySchema = z.object({
  composto_quimico: z.string(),
  risco_de_incendio: z.string(),
  entalpia: z.string(),
  entalpia_unidade: z.string(),
  entalpia_fonte_bibliografica: z.string(),
  limite_inf_explosividade: z.string().transform(Number),
  limite_inf_explosividade_fonte_bibliografica: z.string(),
  ponto_de_fulgor: z.string(),
  ponto_de_fulgor_unidade: z.string(),
  ponto_de_fulgor_fonte_bibliografica: z.string(),
})
type SecuritySchema = z.infer<typeof SecuritySchema>

export default function Fifeteen() {
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
  const navigate = useNavigate()
  const { handleSubmit, register, setValue } = useForm({
    resolver: zodResolver(SecuritySchema),
  })
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ps/4")
  }
  const [riscoDeIncendio, setRiscoDeIncendio] = useState("Não")
  useEffect(() => {
    setValue("risco_de_incendio", riscoDeIncendio)
  }, [riscoDeIncendio, setValue])
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex h-full flex-col justify-between px-8 xl:px-0"
    >
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
            <div className="mb-6 space-y-2">
              <h1 className="w-full text-2xl font-bold">Segurança</h1>
              <div className="flex items-center justify-between">
                <label
                  className="flex w-full justify-between text-sm text-gray-500"
                  htmlFor="corrosion-factor"
                >
                  Fator risco de incêndio
                </label>
                <CircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="chemical-composition"
              >
                Composto químico:
              </label>
              <Select
                required
                onValueChange={(value) => setValue("composto_quimico", value)}
              >
                <SelectTrigger id="chemical-composition">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Radio
              label="Apresentará risco de incêndio?"
              defaultValue="Não"
              checkboxes={checkboxes}
              changeValueAction={(value) => setRiscoDeIncendio(value)}
            />
            <div className="my-4 flex w-full flex-col space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="enthalpy"
                >
                  Entalpia do processo associado:
                </label>
                <div className="inline-flex w-full space-x-4">
                  <Input
                    required
                    id="enthalpy"
                    placeholder="Entalpia"
                    {...register("entalpia")}
                  />
                  <Select
                    required
                    onValueChange={(value) =>
                      setValue("entalpia_unidade", value)
                    }
                  >
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Kg</SelectItem>
                      <SelectItem value="option2">g</SelectItem>
                      <SelectItem value="option3">L</SelectItem>
                      <SelectItem value="option4">mol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-1"
                >
                  Fonte bibliográfica:
                </label>
                <Input
                  required
                  id="bibliographic-source-1"
                  placeholder="Fonte bibliográfica"
                  {...register("entalpia_fonte_bibliografica")}
                />
              </div>
            </div>
            <div className="mb-4 flex w-full flex-col space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="explosion-limit"
                >
                  Limite inferior de explosividade:
                </label>
                <div className="inline-flex w-full items-center space-x-1">
                  <Input
                    required
                    id="explosion-limit"
                    placeholder="Limite"
                    type="number"
                    {...register("limite_inf_explosividade")}
                  />
                  <p className="font-bold">%</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-1"
                >
                  Fonte bibliográfica:
                </label>
                <Input
                  required
                  id="bibliographic-source-1"
                  placeholder="Fonte bibliográfica"
                  {...register("limite_inf_explosividade_fonte_bibliografica")}
                />
              </div>
            </div>
            <div className="mb-4 flex w-full flex-col space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="flash-point"
                >
                  Ponto de fulgor:
                </label>
                <div className="inline-flex w-full space-x-4">
                  <Input
                    required
                    id="flash-point"
                    placeholder="Ponto de fulgor"
                    {...register("ponto_de_fulgor")}
                  />
                  <Select
                    required
                    onValueChange={(value) =>
                      setValue("ponto_de_fulgor_unidade", value)
                    }
                  >
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Kg</SelectItem>
                      <SelectItem value="option2">g</SelectItem>
                      <SelectItem value="option3">L</SelectItem>
                      <SelectItem value="option4">mol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-1"
                >
                  Fonte bibliográfica:
                </label>
                <Input
                  required
                  id="bibliographic-source-1"
                  placeholder="Fonte bibliográfica"
                  {...register("ponto_de_fulgor_fonte_bibliografica")}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-start   ">
              <p className="mb-2 text-sm text-gray-600">
                Item 1 - preferencial
              </p>
              <p className="mb-2 text-sm text-gray-600">
                Item 2 - preenchido se não houver dados do item 1
              </p>
              <p className="mb-4 text-sm text-gray-600">
                Item 3 - preenchido se não houver item 1 e 2
              </p>
            </div>
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
