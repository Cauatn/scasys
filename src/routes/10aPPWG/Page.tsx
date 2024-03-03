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
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

const PpwgSchema = z.object({
  mrr: z.string(),
  mrr_quantity: z.string(),
  mrr_unit: z.string(),
  mtad: z.string(),
  mtad_quantity: z.string(),
  mtad_unit: z.string(),
  mtdr: z.string(),
  mtdr_quantity: z.string(),
  mtdr_unit: z.string(),
  td: z.string(),
  td_quantity: z.string(),
  td_unit: z.string(),
  f: z.string(),
  bibliographical_source_td: z.string(),
})
type PpwgSchema = z.infer<typeof PpwgSchema>

export default function TenaPPWG() {
  const { handleSubmit, setValue, register } = useForm({
    resolver: zodResolver(PpwgSchema),
  })
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    console.log(data)
    navigate("/etc")
  }
  return (
    <form
      className="flex h-full flex-col justify-between px-8 xl:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex h-full flex-col justify-start px-8 py-4">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-full">
          <div className="pl-24">
            <h1 className="w-full text-2xl font-bold">
              Problematização de Prevenção de Geração de Resíduos
            </h1>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Insira as informações nos campos abaixo para calcular a
                prevenção de geração de resíduos.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">mrr</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <Input
                  id="mrr"
                  placeholder="mrr"
                  className="w-52 sm:w-20"
                  required
                  {...register("mrr")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Select
                    required
                    onValueChange={(value) => setValue("mrr_quantity", value)}
                  >
                    <SelectTrigger id="mrr-options" className="max-w-32">
                      <SelectValue placeholder="Quantidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    required
                    onValueChange={(value) => setValue("mrr_unit", value)}
                  >
                    <SelectTrigger id="mrr-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">MTAD</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <Input
                  id="mtad"
                  placeholder="MTAD"
                  className="w-52 sm:w-20"
                  {...register("mtad")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Select
                    required
                    onValueChange={(value) => setValue("mtad_quantity", value)}
                  >
                    <SelectTrigger id="mtad-options" className="max-w-32">
                      <SelectValue placeholder="Quantidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    required
                    onValueChange={(value) => setValue("mtad_unit", value)}
                  >
                    <SelectTrigger id="mtad-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">MTDR</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <Input
                  required
                  id="mtdr"
                  placeholder="MTDR"
                  className="w-52 sm:w-20"
                  {...register("mtdr")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Select
                    required
                    onValueChange={(value) => setValue("mtdr_quantity", value)}
                  >
                    <SelectTrigger id="mtdr-options" className="max-w-32">
                      <SelectValue placeholder="Quantidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    required
                    onValueChange={(value) => setValue("mtdr_unit", value)}
                  >
                    <SelectTrigger id="mtdr-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">TD</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                <Input
                  required
                  id="td"
                  placeholder="TD"
                  className="w-52 sm:w-20"
                  {...register("td")}
                />
                <div className="flex justify-between sm:gap-10">
                  <Select
                    required
                    onValueChange={(value) => setValue("td_quantity", value)}
                  >
                    <SelectTrigger id="td-options" className="max-w-32">
                      <SelectValue placeholder="Quantidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    required
                    onValueChange={(value) => setValue("td_unit", value)}
                  >
                    <SelectTrigger id="td-options" className="max-w-32">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <Label className="w-16">F</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex w-2/3 flex-wrap justify-start gap-4">
              <Input
                required
                className="w-52 max-w-[370px] sm:w-full"
                placeholder="Inserir quantidade ou..."
                {...register("f")}
              />
            </div>
          </div>
          <div className="mt-6 w-full pl-24">
            <label
              className="mt-2 block text-sm font-medium text-gray-700"
              htmlFor="fonte-bibliografica"
            >
              Fonte bibliográfica relacionada ao TD
            </label>
            <div className="mt-1">
              <Input
                required
                id="fonte-bibliografica"
                className="max-w-[400px]"
                placeholder="Insira a fonte bibliográfica"
                {...register("bibliographical_source_td")}
              />
            </div>
          </div>
        </div>
      </div>
      <NextPageButton />
    </form>
  )
}
