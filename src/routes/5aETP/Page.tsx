import { Button } from "@/components/ui/button";
import { useItemContext } from "@/context/ItemsContext";

import { Link } from "react-router-dom";

import { ItemsTable } from "@/components/Items-table";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";

function FiveaETP() {
  const { setItemEtapa } = useItemContext();

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-1/2 space-y-4">
          <h1 className="text-2xl font-bold w-full"> Fase de Inventário</h1>
          <div className="max-w-[300px]">
            <Input
              placeholder="Forneça o nome para etapa"
              onChange={(event) => setItemEtapa(event.target.value)}
            />
          </div>
          <div className="inline-flex space-x-2">
            <div className="inline-flex content-center items-center w-full justify-between flex-wrap gap-3">
              <div className="inline-flex items-center justify-start">
                <span className="w-44">Número de repetições :</span>
                <Input type="number" className="w-16" defaultValue={0} />
              </div>
              <div className="space-x-2">
                <span>Adicionar etapa procedimental?</span>
                <Button className="bg-green-500 rounded-full p-3">
                  <PlusIcon className="p-0" />
                </Button>
              </div>
            </div>
          </div>
          <ItemsTable />
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/inventario/3"} className="flex justify-end">
          <Button className="bg-green-400 w-44">Próximo</Button>
        </Link>
      </div>
    </>
  );
}

export { FiveaETP };

