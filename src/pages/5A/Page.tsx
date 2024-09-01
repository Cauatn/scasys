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

export default function FivePage() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const [stepCount, setStepCount] = useState(0);

  const incrementStepCount = () => {
    setStepCount((prevCount) => prevCount + 1);
  };

  const decrementStepCount = () => {
    setStepCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // const [location, setLocation] = useLocation();

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
        <form className="flex flex-col w-full max-w-5xl mx-auto h-full">
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
                    value={stepCount}
                    readOnly
                  />
                  <div className="inline-flex space-x-1">
                    <Button
                      className="rounded-none font-semibold"
                      onClick={decrementStepCount}
                      type="button"
                      variant="outline"
                    >
                      -
                    </Button>
                    <Button
                      className="rounded-none font-semibold"
                      onClick={incrementStepCount}
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
          <div className="flex justify-end w-full">
            <Button className="bg-emerald-600">Proximo</Button>
          </div>
        </form>
      </main>
    </>
  );
}
