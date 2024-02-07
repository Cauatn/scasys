import { Button } from "@/components/ui/button";
import { useItemContext } from "@/context/ItemsContext";
import { Link } from "react-router-dom";

import { ItemsTable } from "@/components/Items-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SixaETP() {
  const { setItemEspecificidade, setItemNome } = useItemContext();

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-1/2 space-y-4">
          <h1 className="text-2xl font-bold w-full"> Fase de Inventário</h1>
          <div className="flex items-center justify-between gap-4 mt-4 mb-4">
            <div className="flex flex-wrap justify-between w-full gap-5">
              <div>
                <Label htmlFor="especificidade">Especificidade:</Label>
                <Input
                  id="especificidade"
                  placeholder="Especificidade"
                  onChange={(event) =>
                    setItemEspecificidade(event.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="Item">Item:</Label>
                <Input
                  id="Item"
                  placeholder="Item"
                  onChange={(event) => setItemNome(event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="Formula">Formula Química:</Label>
                <Input id="Formula" placeholder="Formula" />
              </div>
            </div>
          </div>
          <ItemsTable />
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/inventario/4"} className="flex justify-end">
          <Button className="bg-green-400 w-44">Próximo</Button>
        </Link>
      </div>
    </>
  );
}
