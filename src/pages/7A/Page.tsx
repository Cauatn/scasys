import { Input } from "@/components/ui/input";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "zustand";
import { Card, CardContent } from "@/components/ui/card";
import { FormEvent, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DataTable } from "@/components/items/data-table";
import Experiment from "@/context/experiment";
import { Button } from "@/components/ui/button";

import { buffer } from "@/context/buffer";

export default function SevenPage() {
  const addItemQuantity = Experiment((state) => state.addItemQuantity);
  const [observation, setObservation] = useState("");

  const inventory = Experiment((state) => state.inventory);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    addItemQuantity(
      buffer.get("lastPhase"),
      buffer.get("lastStep"),
      buffer.get("lastItem"),
      [1, 2, 3],
      observation
    );
  };

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
        <div className="flex justify-end w-full">
          <Button className="bg-emerald-600" type="submit">
            Proximo
          </Button>
        </div>
      </form>
    </>
  );
}
