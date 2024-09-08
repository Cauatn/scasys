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

export default function SevenPage() {
  const addItemQuantity = Experiment((state) => state.addItemQuantity);
  const [observation, setObservation] = useState("");

  const inventory = Experiment((state) => state.inventory);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    addData();
  };

  function addData() {
    addItemQuantity(
      buffer.get("lastStep"),
      buffer.get("lastPhase"),
      buffer.get("lastItem"),
      [1, 2, 3],
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
        <div className="flex flex-row justify-between">
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2">
              <div className="flex flex-col">
                <label htmlFor="itemName">Quantidade ou valor</label>
              </div>
              <div className="inline-flex space-x-2 items-center ">
                <Input
                  id="itemName"
                  className="rounded-none border-black"
                  placeholder="Informe a quantidade"
                  type="number"
                />
                <Select>
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
                  Make changes to your profile here. Click save when you're
                  done.
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
