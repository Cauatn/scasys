import { Sidebar } from "@/components/sidebar/Sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { FormEvent, useState } from "react";
import Experiment from "@/context/experiment";

import { useLocation } from "wouter";

export default function Page() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const addName = Experiment((state) => state.addExperimentName);
  const addExperimentType = Experiment((state) => state.addExperimentType);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [location, setLocation] = useLocation();

  if (!sidebar) return null;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addName(name);
    addExperimentType(type);
    setName("");
    setType("");

    //setLocation("/");
  }

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
              <CardContent className="w-full">
                <label htmlFor="name">
                  Escolha um nome para o procedimento ser avaliado
                </label>
                <Input
                  id="name"
                  className="rounded-none border-black"
                  placeholder="Nome do procedimento"
                  onChange={(e) => setName(e.target.value)}
                />
              </CardContent>
            </Card>
            <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full h-full p-7">
              <CardContent className="w-full h-full">
                <label htmlFor="procedure">Escolha um modo de cálculo</label>
                <Select onValueChange={setType}>
                  <SelectTrigger className="w-full rounded-none border-black">
                    {type != "" ? <SelectValue /> : "Escolha o modo de cálculo"}
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="reducionista">Reducionista</SelectItem>
                    <SelectItem value="guiado">Guiado</SelectItem>
                    <SelectItem value="expandido">Expandido</SelectItem>
                    <SelectItem value="exaustivo">Exaustivo</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
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
