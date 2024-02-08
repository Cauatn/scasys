import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useItemContext } from "@/context/ItemsContext";
import { Label } from "@radix-ui/react-dropdown-menu";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TrheeaNDP() {
  const { procedimentos, novoProcedimento } = useItemContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedItem] = useState<string>("Selecione aqui");
  const [procedimento, setProcedimento] = useState<string>("");

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement;
    setSelectedItem(target.textContent ?? "unknown");
  }
  return (
    <>
      <div className="flex flex-col h-full items-center justify-between w-full">
        <div className="flex flex-col w-3/4 justify-center gap-10 sm:w-1/2">
          <div>
            <Label className="font-bold mb-3">
              Forneça um nome para o procedimento, a ser avaliado:
            </Label>
            <Input
              placeholder="Forneça um nome"
              className="h-9 pl-2"
              onChange={(event) => {
                setProcedimento(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-4 justify-between items-center sm:flex sm:flex-row">
            <p>Escolha um modo de cálculo:</p>
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="flex flex-row w-52 justify-between border rounded-md gap-1 pr-2 pl-2"
              >
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                  {selectedValue}
                  {isOpen ? (
                    <TriangleDownIcon className="size-6" />
                  ) : (
                    <TriangleUpIcon className="size-6" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Modos de calculo</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem onSelect={setItem}>
                    Reducionista
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={setItem}>Guiado</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={setItem}>
                    Expandido
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={setItem}>
                    Exaustivo
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="h-full flex flex-col justify-between">
            <Card className="w-[100%]">
              <CardHeader className="flex justify-start content-start items-start">
                <CardTitle className="">Exemplos:</CardTitle>
                <CardDescription className="">
                  Síntese de polietileno - Reducionista
                </CardDescription>
                <CardDescription className="">
                  Isolamento do ácido fórmico - Guiado
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={"/inventory/1"}>
            <Button
              className="bg-green-400 w-fit "
              onClick={() => {
                novoProcedimento(procedimento, selectedValue);
                console.log(procedimentos);
              }}
            >
              Salvar procedimento
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
