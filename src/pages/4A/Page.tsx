import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import Experiment from "@/context/experiment";

import { useNavigate } from "react-router-dom";

import { buffer } from "@/context/buffer";

export default function FourPage() {
  const [selectedPhase, setSelectedPhase] = useState("");

  const addInventoryPhase = Experiment((state) => state.addInventoryPhase);
  const inventory = Experiment((state) => state.inventory);

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    addInventoryPhase({ name: selectedPhase, steps: [] });
    buffer.set("lastPhase", selectedPhase);
    navigate("/app/5a");
  }

  useEffect(() => {
    console.log(inventory);
  }, [inventory]);

  return (
    <>
      <form
        className="flex flex-col w-full max-w-5xl mx-auto h-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-between w-full my-20">
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full h-full p-7">
            <CardContent className="w-full h-full">
              <label htmlFor="procedure">
                Informe a fase ao qual o experimento está
              </label>
              <Select
                onValueChange={(value) => {
                  setSelectedPhase(value);
                }}
              >
                <SelectTrigger className="w-full rounded-none border-black">
                  <SelectValue placeholder="Selecione uma fase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inicial">Inicial</SelectItem>
                  <SelectItem value="intermediaria">Intermediaria</SelectItem>
                  <SelectItem value="final">Final</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          {selectedPhase === "intermediaria" && (
            <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
              <CardContent className="w-full">
                <div className="flex flex-col">
                  <label htmlFor="name">
                    Informe um nome para a fase ser avaliada
                  </label>
                  <small className="font-semibold">
                    Caso não seja dita a fase, por padrão ela será nomeada, Int
                    (N).
                  </small>
                </div>
                <Input
                  id="phase"
                  className="rounded-none border-black"
                  placeholder="Informe o nome da fase"
                />
              </CardContent>
            </Card>
          )}
        </div>
        <div className="flex justify-end w-full">
          <Button className="bg-emerald-600" type="submit">
            Proximo
          </Button>
        </div>
      </form>
    </>
  );
}
