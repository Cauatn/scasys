import NextPageButton from "@/components/next-page-button"
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
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

const SecuritySchema = z.object({
  composto_quimico: z.string(),
  quantidade: z.string().transform(Number),
  quantidade_unidade: z.string(),
  pressao_do_gas: z.string().transform(Number),
  pressao_do_gas_unidade: z.string(),
  pressao_do_ar: z.string().transform(Number),
  pressao_do_ar_unidade: z.string(),
  estado_do_gas: z.string(),
  temperatura_do_ambiente: z.string().transform(Number),
  temperatura_do_composto: z.string().transform(Number),
})
type SecuritySchema = z.infer<typeof SecuritySchema>

function FourteenFpSeg() {
  const { handleSubmit, register, setValue } = useForm({
    resolver: zodResolver(SecuritySchema),
  })
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/ps/3")
  }
  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
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
                  Fator: risco de gases confinados fp
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

            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="quantidade"
              >
                Quantidade
              </label>
              <div className="inline-flex w-full space-x-4">
                <Input
                  required
                  id="quantidade"
                  placeholder="Quantidade"
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
            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="explosion-limit"
              >
                Pressão do gás
              </label>
              <div className="inline-flex w-full space-x-4">
                <Input
                  required
                  id="explosion-limit"
                  placeholder="Limite"
                  type="number"
                  {...register("pressao_do_gas")}
                />
                <Select
                  required
                  onValueChange={(value) =>
                    setValue("pressao_do_gas_unidade", value)
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
            <div className="mb-4">
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="pressao"
              >
                Pressão do ar
              </label>
              <div className="inline-flex w-full space-x-4">
                <Input
                  required
                  id="pressao"
                  placeholder="Pressão do ar"
                  type="number"
                  {...register("pressao_do_ar")}
                />
                <Select
                  required
                  onValueChange={(value) =>
                    setValue("pressao_do_ar_unidade", value)
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
          <div className="flex flex-col">
            <div>
              <div className="mb-4">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="state-gas"
                >
                  Estado do gás
                </label>
                <Select
                  required
                  onValueChange={(value) => setValue("estado_do_gas", value)}
                >
                  <SelectTrigger id="state-gas">
                    <SelectValue placeholder="Unidade" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="option1">Comprimido</SelectItem>
                    <SelectItem value="option2">Rarefeito</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-4">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-2"
                >
                  Temperatura do ambiente
                </label>
                <Input
                required
                  id="bibliographic-source-2"
                  placeholder="Temperatura do ambiente"
                  type="number"
                  {...register("temperatura_do_ambiente")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source-3"
                >
                  Temperatura do composto
                </label>
                <Input
                required
                  id="bibliographic-source-3"
                  placeholder="Temperatura do composto"
                  type="number"
                  {...register("temperatura_do_composto")}
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

export { FourteenFpSeg }

