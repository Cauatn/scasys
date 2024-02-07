import { ItemsTable } from "@/components/Items-table";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useItemContext } from "@/context/ItemsContext";
import { Link } from "react-router-dom";

function FouraF() {
  const { setItemFase } = useItemContext();

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 space-y-4 w-1/2">
          <h1 className="text-2xl font-bold">Fase de Inventário</h1>
          <div className="max-w-[300px]">
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
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Adicionar fase intermediaria?</p>
            <Button className="bg-green-500 text-white">+</Button>
          </div>
          <ItemsTable />
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/inventario/2"} className="flex justify-end">
          <Button className="bg-green-400 w-44">Próximo</Button>
        </Link>
      </div>
    </>
  );
}

export { FouraF };

