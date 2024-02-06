import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

import { ItemsTable } from "@/components/Items-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useItemContext } from "@/context/ItemsContext";

function FouraF() {
  const { setItemFase } = useItemContext();

  return (
    <section className="h-screen mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Fase de Inventário</h1>
      <div className="justify-between flex">
        <div className="w-[40%] flex flex-col gap-5">
          <Select onValueChange={(e) => setItemFase(e)}>
            <SelectTrigger id="phase-select">
              <SelectValue placeholder="selecione aqui" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="inicial">Inicial</SelectItem>
              <SelectItem value="intermediaria">Intermediária</SelectItem>
              <SelectItem value="final">Final</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Adicionar fase intermediaria?</p>
            <Button className="bg-green-500 text-white">+</Button>
          </div>
          <Link to={"/inventario/2"} className="justify-self-end md:col-span-1">
            <Button className="bg-green-400 w-fit ">Próximo</Button>
          </Link>
        </div>
        <ItemsTable />
      </div>
    </section>
  );
}

export { FouraF };

