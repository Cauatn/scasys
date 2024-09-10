import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import Experiment from "@/context/experiment";
import { DataTable } from "@/components/items/data-table";
import { useNavigate } from "react-router-dom";

import { buffer } from "@/context/buffer";

export default function SixPage() {
  //const [location, setLocation] = useLocation();

  const inventory = Experiment((state) => state.inventory);
  const addItemOnStep = Experiment((state) => state.addItemOnStep);

  const [itemName, setItemName] = useState("");
  const [formula, setFormula] = useState("");
  const [especificidade, setEspecificidade] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(inventory);
  }, [inventory]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    buffer.set("lastItem", itemName);

    addItemOnStep(buffer.get("lastStep"), buffer.get("lastPhase"), {
      itemName,
      formula,
      especificidade,
      quantitys: [],
      observation: "",
    });

    navigate("/app/7a");
  };

  return (
    <>
      <form
        className="flex flex-col w-full max-w-6xl mx-auto h-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-between w-full my-20 space-x-2">
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2">
              <div className="flex flex-col">
                <label htmlFor="itemName">Item</label>
              </div>
              <Input
                id="itemName"
                className="rounded-none border-black"
                placeholder="Informe o nome do item"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2">
              <div className="flex flex-col">
                <label htmlFor="formula">Fórmula química</label>
              </div>
              <Input
                id="formula"
                className="rounded-none border-black"
                placeholder="Informe a fórmula química"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2">
              <div className="flex flex-col">
                <label htmlFor="especificidade">Especificidade</label>
              </div>
              <Input
                id="especificidade"
                className="rounded-none border-black"
                placeholder="Informe a especificidade"
                value={especificidade}
                onChange={(e) => setEspecificidade(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>
        <DataTable />
        <pre>{JSON.stringify(inventory, null, 2)}</pre>
        <div className="flex justify-end w-full">
          <Button className="bg-emerald-600" type="submit">
            Proximo
          </Button>
        </div>
      </form>
    </>
  );
}
