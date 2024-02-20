import NextPageButton from "@/components/next-page-button"
import Radio from "@/components/radio-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { SVGProps, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { JSX } from "react/jsx-runtime"
import { z } from "zod"

const InvSchema = z.object({
  conj_res_bombona: z.string(),
  quant_total: z.string(),
  unidade: z.string(),
  quant_total_nova: z.string(),
  metodo_avaliacao: z.string(),
  observacoes: z.string().optional(),
  quant_reagentes: z.string().optional().transform(Number),
  unidade_reagentes: z.string().optional(),
  quant_interferentes: z.string().optional().transform(Number),
})
type InvSchema = z.infer<typeof InvSchema>

export default function EightaPerg() {
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
  const [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, setValue, register } = useForm({
    resolver: zodResolver(InvSchema),
  })
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ppwg")
  }

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-4 space-y-4 xl:w-1/2">
          <h1 className="w-full text-2xl font-bold">Fase de Inventário</h1>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <Select
              onValueChange={(value) => setValue("conj_res_bombona", value)}
              required
            >
              <SelectTrigger id="residue-set">
                <SelectValue placeholder="Conjunto de resíduos na bombona e:" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => setValue("quant_total", value)}
              required
            >
              <SelectTrigger id="total-quantity">
                <SelectValue placeholder="quantidade total" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => setValue("unidade", value)}
              required
            >
              <SelectTrigger id="unit">
                <SelectValue placeholder="kg/etc..." />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="kg">Kg</SelectItem>
                <SelectItem value="liters">Liters</SelectItem>
              </SelectContent>
            </Select>
            <Button className="col-span-3 bg-green-400" variant="secondary">
              Adicionar novo resíduo
            </Button>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-4 md:flex md:flex-row md:justify-between">
            <Button
              className="flex w-72 items-center space-x-2"
              variant="secondary"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Adicionar novo conjunto de resíduos</span>
            </Button>
            <div className="w-72">
              <Select
                onValueChange={(value) => setValue("quant_total_nova", value)}
                required
              >
                <SelectTrigger id="added-quantity">
                  <SelectValue placeholder="quantidade total nova adicionada" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 sm:flex sm:flex-row sm:justify-between">
            <Label>Qual metodo de avaliação a ser empregado?</Label>
            <div>
              <Select
                onValueChange={(value) => setValue("metodo_avaliacao", value)}
                required
              >
                <SelectTrigger id="added-quantity" className="w-60 sm:max-w-40">
                  <SelectValue placeholder="Selecione aqui" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">
                    Nas condições experimentais
                  </SelectItem>
                  <SelectItem value="option2">Em condições extremas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Observações"
              className="max-w-60"
              {...register("observacoes")}
            />
          </div>
          <Radio
            label="O objetivo do procedimento é a formação de um produto químico ?"
            defaultValue="Não"
            checkboxes={checkboxes}
            action={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <>
              <div className="flex flex-col justify-between md:flex-row">
                <Label className="text-sm md:max-w-60">
                  Qual é a quantidade de reagentes efetivamente empregada no
                  procedimento?
                </Label>

                <div className="mt-4 flex w-full flex-row justify-between md:mt-0 md:w-1/2">
                  <div>
                    <Input
                      required
                      type="number"
                      className="max-w-32"
                      {...register("quant_reagentes")}
                    />
                  </div>
                  <div className="max-w-32">
                    <Select
                      required
                      onValueChange={(value) =>
                        setValue("unidade_reagentes", value)
                      }
                    >
                      <SelectTrigger id="added-quantity">
                        <SelectValue placeholder="Selecione aqui" />
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
              <div className="flex items-center space-x-4">
                <FileQuestionIcon className="h-5 w-5" />
                <Label>
                  Quantos interferentes há <br />
                  no procedimento?
                </Label>
                <Input
                  type="number"
                  required
                  className="max-w-20"
                  {...register("quant_interferentes")}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}

function FileQuestionIcon(
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
