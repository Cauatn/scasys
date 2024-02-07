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
      <div className="bg-white p-6 max-w-4xl m-auto h-screen space-y-8">
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
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Button className="flex items-center space-x-2" variant="secondary">
            <PlusIcon className="w-5 h-5" />
            <span>Adicionar novo conjunto de resíduos</span>
          </Button>
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
        <div className="flex flex-row gap-8 justify-between ">
          <div className="inline-flex items-center space-x-4">
            <Label>Qual metodo de avaliação a ser empregado?</Label>
            <Select>
              <SelectTrigger id="added-quantity" className="max-w-fit">
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
            O objetivo do procedimento é<br /> a formação de um produto químico
            ?
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
          <div className="flex flex-row justify-between">
            <div className="flex items-center space-x-2">
              <Label className="text-sm max-w-60">
                Qual é a quantidade de reagentes efetivamente empregada no
                procedimento?
              </Label>
              <Input type="number" className="max-w-20" />
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
            <div className="flex items-center space-x-4">
              <FileQuestionIcon className="w-5 h-5" />
              <Label>
                Quantos interferentes há <br />
                no procedimento?
              </Label>
              <Input type="number" className="max-w-20" />
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <Link to={"/inventario/4"} className="flex justify-end">
            <Button className="bg-green-400 w-44">Próximo</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

function ArrowLeftIcon(
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
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
