import { Sidebar } from "@/components/sidebar/Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectLabel,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export default function Page() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

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
        <section className="flex flex-col w-full max-w-5xl mx-auto h-full">
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
                />
              </CardContent>
            </Card>
            <Card className="rounded-none flex justify-center items-center max-w-[400px] max-h-[150px] w-full h-full p-7">
              <CardContent className="w-full h-full">
                <label htmlFor="procedure">Escolha um modo de cálculo</label>
                <Select>
                  <SelectTrigger className="w-full rounded-none border-black">
                    Selecione o modo de cálculo
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
            <Button className="bg-emerald-600">Proximo</Button>
          </div>
        </section>
      </main>
    </>
  );
}
