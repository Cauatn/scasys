import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FormEvent, useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DataTable } from "@/components/items/data-table";
import Experiment from "@/context/experiment";
import { buffer } from "@/context/buffer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

//TODO : ABSTRAIR ESSAS FUNCOES PARA TORNAR MAIS LEGIVEL
//UTLIZANDO ZUSTAND OU UM CUSTOM HOOK

export default function SevenPage() {
  const addItemQuantity = Experiment((state) => state.addItemQuantity);
  const [observation, setObservation] = useState("");

  const [quantities, setQuantities] = useState<[number, string][]>([[0, ""]]);

  const addNewValue = (value: string, index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? [parseFloat(value), quantity[1]] : quantity
      )
    );
  };

  const addUnity = (value: string, index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? [quantity[0], value] : quantity
      )
    );
  };

  const handleAddCard = () => {
    setQuantities([...quantities, [0, ""]]);
  };

  const inventory = Experiment((state) => state.inventory);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    addData();

    navigate("/app/8a")
  };

  function addData() {
    addItemQuantity(
      buffer.get("lastStep"),
      buffer.get("lastPhase"),
      buffer.get("lastItem"),
      quantities,
      observation
    );
  }

  useEffect(() => {
    console.log(inventory);
  }, [inventory]);

  return (
    <>
      <form
        className="flex flex-col w-full max-w-6xl mx-auto h-full space-y-6 pt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-between overflow-auto space-x-4">
          {quantities.map((quantity, index) => (
            <Card
              key={index}
              className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4 mb-3"
            >
              <CardContent className="w-full space-y-2">
                <div className="flex flex-col">
                  <label htmlFor={`itemName-${index}`}>
                    Quantidade ou valor
                  </label>
                </div>
                <div className="inline-flex space-x-2 items-center ">
                  <Input
                    id={`itemName-${index}`}
                    className="rounded-none border-black"
                    placeholder="Informe a quantidade"
                    type="number"
                    onChange={(e) => addNewValue(e.target.value, index)}
                  />
                  <Select onValueChange={(value) => addUnity(value, index)}>
                    <SelectTrigger className="w-[180px] rounded-none border-black">
                      <SelectValue placeholder="Unidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kg</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="mol">Mol</SelectItem>
                      <SelectItem value="mol/l">Mol/L</SelectItem>
                      <SelectItem value="%">%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2">
              <div className="flex flex-col">
                <label htmlFor="itemName">Observações</label>
              </div>
              <div className="inline-flex space-x-2 items-center ">
                <Input
                  id="itemName"
                  className="rounded-none border-black"
                  placeholder="Observações"
                  type="text"
                  onChange={(e) => setObservation(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2 justify-center items-center flex p-0">
              <Button
                onClick={handleAddCard}
                className="bg-blue-500 text-white"
              >
                Adicionar um novo valor
              </Button>
            </CardContent>
          </Card>
        </div>
        <DataTable />
        <div className="flex justify-end w-full space-x-2">
          <Button className="" type="submit" variant="outline">
            Não
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600">Sim</Button>
            </DialogTrigger>
            <DialogContent className={cn("rounded-none")}>
              <DialogHeader>
                <DialogTitle>
                  Escolha aonde deseja adicionar o novo item
                </DialogTitle>
                <DialogDescription>
                  Selecione a qual "passo" do procedimento você quer voltar a
                  preencher o inventario.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
                  <CardContent className="w-full space-y-2">
                    <div className="flex flex-col">
                      <label htmlFor="itemName">NOVA FASE</label>
                    </div>
                    <Button
                      className="inline-flex space-x-2 items-center rounded-none w-full bg-slate-100 font-semibold"
                      variant="ghost"
                      type="submit"
                      onClick={() => {
                        addData();
                        navigate("/app/4a");
                      }}
                    >
                      ADICIONAR NOVA FASE
                    </Button>
                  </CardContent>
                </Card>
                <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
                  <CardContent className="w-full space-y-2">
                    <div className="flex flex-col">
                      <label htmlFor="itemName">NOVA ETAPA</label>
                    </div>
                    <Button
                      className="inline-flex space-x-2 items-center rounded-none w-full bg-slate-100 font-semibold"
                      variant="ghost"
                      onClick={() => {
                        addData();
                        navigate("/app/5a");
                      }}
                    >
                      ADICIONAR NOVA ETAPA
                    </Button>
                  </CardContent>
                </Card>
                <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
                  <CardContent className="w-full space-y-2">
                    <div className="flex flex-col">
                      <label htmlFor="itemName">MESMO ESTADO</label>
                    </div>
                    <Button
                      className="inline-flex space-x-2 items-center rounded-none w-full bg-slate-100 font-semibold"
                      variant="ghost"
                      onClick={() => {
                        addData();
                        navigate("/app/6a");
                      }}
                    >
                      ADICIONAR SOMENTE NOVO ITEM
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <DialogFooter>
                {/* <Button type="submit">Save changes</Button> */}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </>
  );
}
