import { Input } from "@/components/ui/input"

import NextPageButton from "@/components/next-page-button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

const CmhSchema = z.object({
  compostos_quimicos: z.string(),
  potencial_cancerigeno: z.string(),
  referencia_bibliografica: z.string(),
})
type CmhSchema = z.infer<typeof CmhSchema>

export default function TwelveaCMH() {
  const { handleSubmit, register, setValue } = useForm({
    resolver: zodResolver(CmhSchema),
  })
  const [isOpen, setIsOpen] = useState(false)
  const [potencialCancerigeno, setPotencialCancerigeno] =
    useState<string>("nao")
  const [selectedValue, setSelectedItem] = useState<string>("Composto 1")
  //essa linha pra quando for implementar a logica
  // const [value, setValue] = useState(false)

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement
    setSelectedItem(target.textContent ?? "unknown")
  }
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ps/1")
  }
  useEffect(() => {
    setValue("potencial_cancerigeno", potencialCancerigeno)
  }, [potencialCancerigeno, setValue])

  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
            <h1 className="w-full text-2xl font-bold">
              Carcinogenicidade e mutagenicidade
            </h1>
            <div className="mt-2 flex w-full justify-between text-sm text-gray-500">
              Compostos químicos
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <Select
                required
                onValueChange={(value) => setValue("compostos_quimicos", value)}
              >
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Selecione o composto" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Composto 1</SelectItem>
                  <SelectItem value="option2">Composto 2</SelectItem>
                  <SelectItem value="option3">Composto 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex w-full items-center justify-between space-x-4">
            <p>Apresenta potencial Cancerigeno ou mutagênico?</p>
            <RadioGroup
              defaultValue="nao"
              className="flex"
              required
              onValueChange={(value) => setPotencialCancerigeno(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="rounded-md border-slate-200 p-4 data-[state=checked]:bg-green-400"
                  value="sim"
                  id="sim"
                  required
                />
                <Label className="absolute cursor-pointer pl-1" htmlFor="sim">
                  S
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="rounded-md border-slate-200 p-4 data-[state=checked]:bg-green-400"
                  value="nao"
                  id="nao"
                />
                <Label className="absolute cursor-pointer pl-1" htmlFor="nao">
                  N
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex w-full flex-1">
            <div className="mt-4 flex w-full flex-col justify-end space-y-6">
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
                  {...register("referencia_bibliografica")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
