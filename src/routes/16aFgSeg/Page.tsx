import NextPageButton from "@/components/next-page-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod"
import { SelectContent } from "@radix-ui/react-select"
import { SVGProps } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { JSX } from "react/jsx-runtime"
import { z } from "zod"

const SecuritySchema = z.object({
  composto_quimico: z.string(),
  quantidade: z.string().transform(Number),
  quantidade_unidade: z.string(),
  volume_gas_formado: z.string().transform(Number),
  volume_gas_formado_unidade: z.string(),
  pressao_ar: z.string().transform(Number),
  pressao_ar_unidade: z.string(),
  fonte_bibliografica: z.string(),
})
type SecuritySchema = z.infer<typeof SecuritySchema>

export default function SixteenFgSeg() {
  const { handleSubmit, register, setValue } = useForm({
    resolver: zodResolver(SecuritySchema),
  })
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ps/5")
  }
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex h-full flex-col justify-between px-8 xl:px-0"
    >
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div className="mb-6 space-y-2">
            <h1 className="w-full text-2xl font-bold">Segurança</h1>
            <div className="flex items-center justify-between">
              <label
                className="flex w-full justify-between text-sm text-gray-500"
                htmlFor="corrosion-factor"
              >
                Fator fg: Formação de gases prejudiciais
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
                onValueChange={(value) => setValue("composto_quimico", value)}
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
            <div className="flex w-full flex-col space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-rate"
              >
                Quantidade
              </label>
              <div className="inline-flex items-center space-x-4">
                <Input
                  required
                  id="corrosion-raapresentate"
                  placeholder="Insira aqui"
                  className="w-full"
                  type="number"
                  {...register("quantidade")}
                />
                <Select
                  required
                  onValueChange={(value) =>
                    setValue("quantidade_unidade", value)
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
          </div>
          <div className="flex w-full">
            <RadioGroup className="w-full">
              <div className="mt-4 flex flex-col justify-between space-y-6">
                <div className="flex flex-col space-y-2">
                  <label
                    className="inline-flex justify-between text-sm font-medium text-gray-700"
                    htmlFor="temperature"
                  >
                    <p>Volume do gás formado</p>
                    <RadioGroupItem value="option-one" id="option-one" />
                  </label>
                  <div className="inline-flex items-center space-x-4">
                    <Input
                      required
                      id="temperature"
                      placeholder="Insira aqui"
                      className="w-full"
                      type="number"
                      {...register("volume_gas_formado")}
                    />
                    <Select
                      required
                      onValueChange={(value) =>
                        setValue("volume_gas_formado_unidade", value)
                      }
                    >
                      <SelectTrigger id="residue-set">
                        <SelectValue placeholder="Unidade" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="option1">°C</SelectItem>
                        <SelectItem value="option2">Fah</SelectItem>
                        <SelectItem value="option3">L</SelectItem>
                        <SelectItem value="option4">mol</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    className="inline-flex justify-between text-sm font-medium text-gray-700"
                    htmlFor="temperature"
                  >
                    <p>Pressão do ar</p>
                    <RadioGroupItem value="option-two" id="option-two" />
                  </label>
                  <div className="inline-flex items-center space-x-4">
                    <Input
                      required
                      id="temperature"
                      placeholder="Insira aqui"
                      className="w-full"
                      type="number"
                      {...register("pressao_ar")}
                    />
                    <Select
                      required
                      onValueChange={(value) =>
                        setValue("pressao_ar_unidade", value)
                      }
                    >
                      <SelectTrigger id="residue-set">
                        <SelectValue placeholder="Unidade" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="option1">°C</SelectItem>
                        <SelectItem value="option2">Fah</SelectItem>
                        <SelectItem value="option3">L</SelectItem>
                        <SelectItem value="option4">mol</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="bibliographic-source"
                  >
                    Fonte bibliográfica
                  </label>
                  <Input
                    required
                    id="bibliographic-source"
                    placeholder="Digite a fonte bibliográfica"
                    type="text"
                    {...register("fonte_bibliografica")}
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}

function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
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
