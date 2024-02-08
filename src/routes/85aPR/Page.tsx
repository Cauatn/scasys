import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SVGProps, useState } from "react";
import { Link } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

export default function EightaPerg() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 space-y-4 w-full xl:w-1/2">
          <h1 className="text-2xl font-bold w-full"> Fase de Inventário</h1>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Select>
              <SelectTrigger id="residue-set">
                <SelectValue placeholder="Conjunto de resíduos na bombona e:" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="total-quantity">
                <SelectValue placeholder="quantidade total" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
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
          <div className="flex flex-col items-center flex-wrap gap-4 md:flex md:flex-row md:justify-between">
            <Button
              className="flex items-center space-x-2 w-72"
              variant="secondary"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Adicionar novo conjunto de resíduos</span>
            </Button>
            <div className="w-72">
              <Select>
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
          <div className="flex flex-col gap-8 items-center sm:flex sm:flex-row sm:justify-between">
            <Label>Qual metodo de avaliação a ser empregado?</Label>
            <div>
              <Select>
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
            <Input placeholder="Observações" className="max-w-60" />
          </div>
          <div className="flex space-x-4">
            <Label>
              O objetivo do procedimento é<br /> a formação de um produto
              químico ?
            </Label>
            <ToggleGroup
              type="single"
              defaultValue="n"
              className="space-x-1"
              onValueChange={() => setIsOpen(!isOpen)}
            >
              <ToggleGroupItem
                value="s"
                className="data-[state=on]:bg-green-400 w-10 h-10 border rounded-md"
              >
                S
              </ToggleGroupItem>
              <ToggleGroupItem
                value="n"
                className="data-[state=on]:bg-green-400 w-10 h-10 border rounded-md"
              >
                N
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          {isOpen && (
            <>
              <div className="flex flex-col justify-between md:flex-row">
                <Label className="text-sm md:max-w-60">
                  Qual é a quantidade de reagentes efetivamente empregada no
                  procedimento?
                </Label>

                <div className="flex mt-4 flex-row justify-between w-full md:w-1/2 md:mt-0">
                  <div>
                    <Input type="number" className="max-w-32" />
                  </div>
                  <div className="max-w-32">
                    <Select>
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
                <FileQuestionIcon className="w-5 h-5" />
                <Label>
                  Quantos interferentes há <br />
                  no procedimento?
                </Label>
                <Input type="number" className="max-w-20" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-5 sm:mt-0">
        <Link to={"/inventory/5"} className="flex justify-end">
          <Button className="bg-green-400 w-44">Próximo</Button>
        </Link>
      </div>
    </>
  );
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
  );
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
  );
}
