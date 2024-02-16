import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Link, useNavigate } from "react-router-dom"

export default function TenaPPWG() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex h-full flex-col items-center justify-between px-8 xl:px-0">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
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
          <form className="flex flex-col items-center space-y-4">
            <div className="flex w-full flex-1 flex-col flex-wrap items-center gap-4 sm:flex sm:flex-row sm:justify-center">
              <div className="flex items-center">
                <Label className="w-16">MMR</Label>
                <div>
                  <Button variant="secondary">?</Button>
                </div>
              </div>
              <div className="flex w-2/3 flex-wrap justify-center gap-4">
                <div className="flex-col space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                  <Input id="mrr" placeholder="MMR" className="w-52 sm:w-20" />
                  <div className="flex justify-between sm:gap-10">
                    <Select>
                      <SelectTrigger id="mrr-options" className="max-w-32">
                        <SelectValue placeholder="Quantidade" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
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
              <div className="flex w-2/3 flex-wrap justify-center gap-4">
                <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                  <Input id="mrr" placeholder="MTAD" className="w-52 sm:w-20" />
                  <div className="flex justify-between sm:gap-10">
                    <Select>
                      <SelectTrigger id="mtad-options" className="max-w-32">
                        <SelectValue placeholder="Quantidade" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
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
                <Label className="w-16">MTDR</Label>
                <div>
                  <Button variant="secondary">?</Button>
                </div>
              </div>
              <div className="flex w-2/3 flex-wrap justify-center gap-4">
                <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                  <Input id="mrr" placeholder="MTDR" className="w-52 sm:w-20" />
                  <div className="flex justify-between sm:gap-10">
                    <Select>
                      <SelectTrigger id="mrr-options" className="max-w-32">
                        <SelectValue placeholder="Quantidade" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
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
                <Label className="w-16">TD</Label>
                <div>
                  <Button variant="secondary">?</Button>
                </div>
              </div>
              <div className="flex w-2/3 flex-wrap justify-center gap-4">
                <div className="flex-col gap-5 space-y-4 sm:flex sm:flex-row sm:gap-10 sm:space-y-0">
                  <Input id="mrr" placeholder="TD" className="w-52 sm:w-20" />
                  <div className="flex justify-between sm:gap-10">
                    <Select>
                      <SelectTrigger id="mtad-options" className="max-w-32">
                        <SelectValue placeholder="Quantidade" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
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
                <Label className="w-16">F</Label>
                <div>
                  <Button variant="secondary">?</Button>
                </div>
              </div>
              <div className="flex w-2/3 flex-wrap justify-center gap-4">
                <Input
                  className="w-52 sm:w-full"
                  placeholder="Inserir quantidade ou..."
                />
              </div>
            </div>
            <div className="mt-6 w-full">
              <label
                className="mt-2 block text-sm font-medium text-gray-700"
                htmlFor="fonte-bibliografica"
              >
                Fonte bibliográfica relacionada ao TD
              </label>
              <div className="mt-1">
                <Input
                  id="fonte-bibliografica"
                  placeholder="Insira a fonte bibliográfica"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mb-6 flex flex-col items-center space-x-4 space-y-2 px-8 xl:mr-8 xl:flex-row xl:justify-end xl:space-y-0 xl:px-0">
        <Button variant="secondary">Tabela</Button>
        <Link to={"/etc"} className="w-full xl:w-44">
          <Button className="w-full bg-green-500 xl:w-44">Próximo</Button>
        </Link>
        <Button
          className="w-full bg-slate-950 xl:hidden"
          type="button"
          onClick={() => navigate(-1)}
        >
          Retornar
        </Button>
      </div>
    </>
  )
}
