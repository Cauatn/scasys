import { Sidebar } from "@/components/sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "zustand";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import Experiment from "@/context/experiment";
import { useLocation } from "wouter";

export default function SixPage() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  //const [location, setLocation] = useLocation();

  const inventory = Experiment((state) => state.inventory);
  const addItemOnStep = Experiment((state) => state.addItemOnStep);

  const [itemName, setItemName] = useState("");
  const [formula, setFormula] = useState("");
  const [especificidade, setEspecificidade] = useState("");

  useEffect(() => {
    console.log(inventory);
  }, [inventory]);

  const handleSubmit = (event) => {
    event.preventDefault();

    addItemOnStep("fase 1", "inicial", {
      itemName,
      formula,
      especificidade,
    });
  };

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh)] bg-gray-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 max-w-screen flex flex-col overflow-x-hidden justify-start",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Navbar title="Telas inicial" />
        <form
          className="flex flex-col w-full max-w-5xl mx-auto h-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-between w-full my-20">
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
          <pre>{JSON.stringify(inventory, null, 2)}</pre>
          <div className="flex justify-end w-full">
            <Button className="bg-emerald-600" type="submit">
              Proximo
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
