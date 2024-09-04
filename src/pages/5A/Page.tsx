import { Sidebar } from "@/components/sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "zustand";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import Experiment from "@/context/experiment";
import { useLocation } from "wouter";
import { useNavigate } from "react-router-dom";

export default function FivePage() {
  const [phaseInput, setPhaseInput] = useState("");
  const [repetitions, setRepetitions] = useState(1);

  const [location, setLocation] = useLocation();

  const addStepOnPhase = Experiment((state) => state.addStepOnPhase); // Corrigido para usar Experiment
  const inventory = Experiment((state) => state.inventory);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(inventory);
  }, [inventory]);

  const handleSubmit = (event: FormEvent) => {
    addStepOnPhase("inicial", {
      name: phaseInput,
      repetitions: repetitions,
      items: [],
    });

    navigate("/app/6a");
  };

  return (
    <>
      <form
        className="flex flex-col w-full max-w-5xl mx-auto h-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-between w-full my-20">
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full p-4">
            <CardContent className="w-full space-y-2">
              <div className="flex flex-col">
                <label htmlFor="name">Nome da etapa procedimental</label>
              </div>
              <Input
                id="phase"
                className="rounded-none border-black"
                placeholder="Informe o nome da fase"
                onChange={(e) => setPhaseInput(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full h-full p-7">
            <CardContent className="w-full h-full space-y-2">
              <label htmlFor="etapas">
                Número de repetições da etapa procedimental
              </label>
              <div className="flex items-center justify-start space-x-2">
                <Input
                  id="procedure"
                  className="rounded-none border-black text-center"
                  value={repetitions}
                  readOnly
                />
                <div className="inline-flex space-x-1">
                  <Button
                    className="rounded-none font-semibold"
                    onClick={() =>
                      setRepetitions(repetitions > 1 ? repetitions - 1 : 1)
                    }
                    type="button"
                    variant="outline"
                  >
                    -
                  </Button>
                  <Button
                    className="rounded-none font-semibold"
                    onClick={() => setRepetitions(repetitions + 1)}
                    type="button"
                    variant="outline"
                  >
                    +
                  </Button>
                </div>
              </div>
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
    </>
  );
}
