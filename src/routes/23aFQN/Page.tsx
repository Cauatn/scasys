import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectContent } from "@radix-ui/react-select"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const NeblinaSchema = z.object({
  OzMass: z.string(),
  bibliographicSource: z.string().url(),
})

type NeblinaSchema = z.infer<typeof NeblinaSchema>

export default function TwentyThreeaAG() {
  const { register, setValue, handleSubmit } = useForm({
    resolver: zodResolver(NeblinaSchema),
  })

  const navigate = useNavigate()

  function handleFormSubmit(data: any) {
    console.log(data)
    navigate("/ap/1")
  }

  return (
    <form
      className="m-auto h-screen max-w-4xl space-y-8 bg-white p-6"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <div className="mb-6 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Fotoquímica de neblina
              </h2>
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-factor"
                >
                  (por breve descrição de tiver)
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
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-rate"
                >
                  Massa de Ozônio equivalente
                </label>
                <div className="inline-flex items-center space-x-4">
                  <Select
                    onValueChange={(value) => setValue("OzMass", value)}
                    required
                  >
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Escolha" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">
                        A partir da fonte biblíográfica
                      </SelectItem>
                      <SelectItem value="option1">
                        A partir da fórmula química
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-3 sm:ml-3 sm:mt-0">
                    <Button variant="secondary">?</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end">
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
                required
                {...register("bibliographicSource")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mr-8 flex max-w-4xl justify-end">
        <Button className="bg-green-500 text-white" type="submit">
          Proximo
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
