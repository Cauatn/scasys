import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectContent } from "@radix-ui/react-select"
import { SVGProps } from "react"
import { useNavigate } from "react-router-dom"
import { JSX } from "react/jsx-runtime"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const SegSchema = z.object({
  maxItems: z.string().transform(Number),
})

type SegSchema = z.infer<typeof SegSchema>

export default function EighteenNSeg() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(SegSchema),
  })

  const navigate = useNavigate()

  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ce/1")
  }
  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="mb-4 flex justify-center space-y-4">
        <div className="flex w-full flex-col space-y-4 xl:w-1/2">
          <div className="mb-6 space-y-2">
            <h2 className="w-full text-2xl font-bold">Segurança</h2>
            <div className="flex items-center justify-between">
              <label
                className="flex w-full justify-between text-sm text-gray-500"
                htmlFor="corrosion-factor"
              >
                Items de segurança empregados
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Composto Químico
              </Label>
              <Select>
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Selecione o composto" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="inline-flex w-full items-center space-x-4 space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-rate"
              >
                Número maximo de itens de segurança empregados:
              </label>
              <div className="inline-flex w-3/4 items-center space-x-4">
                <Input
                  id="corrosion-rate"
                  placeholder="Insira aqui"
                  type="number"
                  required
                  {...register("maxItems")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 flex w-full flex-col items-center space-y-2 xl:items-end">
        <Button className="w-full bg-green-500 xl:mr-8 xl:w-44" type="submit">
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
