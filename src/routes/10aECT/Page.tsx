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

const ToxicitySchema = z.object({
  composto_quimico: z.string(),
  concentracao_toxicidade_limite: z.string().transform(Number),
  concentracao_toxicidade_limite_unidade: z.string(),
  tempo_exposicao: z.string().transform(Number),
  tempo_exposicao_unidade: z.string(),
  fonte_bibliografica: z.string(),
})
type ToxicitySchema = z.infer<typeof ToxicitySchema>

export default function TenaECT() {
  const { handleSubmit, setValue, register } = useForm({
    resolver: zodResolver(ToxicitySchema),
  })
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/atc")
  }
  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-4 space-y-4 xl:w-1/2">
          <div>
            <h1 className="w-full text-2xl font-bold">Toxicidade</h1>
            <div className="mt-2 flex w-full justify-between text-sm text-gray-500">
              <label htmlFor="corrosion-factor">
                Exposição a compostos tóxicos
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
            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-rate"
              >
                Concentração de toxidade limite
              </label>
              <div className="inline-flex items-center space-x-4">
                <Input
                  required
                  id="corrosion-rate"
                  placeholder="Insira aqui"
                  className="max-w-28"
                  type="number"
                  {...register("concentracao_toxicidade_limite")}
                />
                <Select
                  required
                  onValueChange={(value) =>
                    setValue("concentracao_toxicidade_limite_unidade", value)
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
                <Button variant="secondary">?</Button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1">
            <div className="mt-4 flex w-full flex-col justify-end space-y-6">
              <div className="flex flex-col space-y-2">
                <label
                  className="inline-flex justify-between text-sm font-medium text-gray-700"
                  htmlFor="temperature"
                >
                  <p>Tempo de exposição</p>
                </label>
                <div className="inline-flex items-center space-x-4">
                  <Input
                    required
                    id="temperature"
                    placeholder="Insira aqui"
                    className="max-w-32"
                    type="number"
                    {...register("tempo_exposicao")}
                  />
                  <Select
                    required
                    onValueChange={(value) =>
                      setValue("tempo_exposicao_unidade", value)
                    }
                  >
                    <SelectTrigger id="residue-set">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option3">Horas</SelectItem>
                      <SelectItem value="option2">Minutos</SelectItem>
                      <SelectItem value="option1">Segundos</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="secondary">?</Button>
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
