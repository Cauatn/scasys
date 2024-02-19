import NextPageButton from "@/components/next-page-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-dropdown-menu"
import { CircleIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

const AtcSchema = z.object({
  compostos_quimicos: z.string(),
  fa_quantidade: z.string().transform(Number),
  fa_unidade: z.string(),
  fa_unidade_medida: z.string(),
  fonte_bibliografica: z.string(),
})
type AtcSchema = z.infer<typeof AtcSchema>

export default function ElevenaACT() {
  const { handleSubmit, register, setValue } = useForm({
    resolver: zodResolver(AtcSchema),
  })
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/cmh")
  }
  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
            <h1 className="w-full text-2xl font-bold">Segurança</h1>
            <div className="mt-2 flex w-full justify-between text-sm text-gray-500">
              <label htmlFor="corrosion-factor">
                Acumulação a compostos tóxicos
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Compostos Químicos
              </Label>
              <Select
                required
                onValueChange={(value) => setValue("compostos_quimicos", value)}
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
                FA
              </label>
              <div className="flex flex-col items-center gap-5 sm:flex sm:flex-row">
                <div className="flex w-full justify-between gap-5">
                  <Select
                    required
                    onValueChange={(value) => setValue("fa_unidade", value)}
                  >
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="BCF">BCF</SelectItem>
                      <SelectItem value="BAF">BAF</SelectItem>
                      <SelectItem value="KOW">Kow</SelectItem>
                      <SelectItem value="other">outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    required
                    id="corrosion-rate"
                    placeholder="Insira aqui"
                    className="min-w-28"
                    type="number"
                    {...register("fa_quantidade")}
                  />
                </div>
                <div className="flex w-full justify-between gap-5">
                  <Select
                    required
                    onValueChange={(value) =>
                      setValue("fa_unidade_medida", value)
                    }
                  >
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">g/L</SelectItem>
                      <SelectItem value="option2">mg/L</SelectItem>
                      <SelectItem value="option3">mol/L</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="secondary">?</Button>
                </div>
              </div>
            </div>
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
                  {...register("fonte_bibliografica")}
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
