import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus, Edit2 } from "lucide-react";
import Bombona from "./components/Bombona";

export default function EigthPage() {
  const { toast } = useToast();
  const cojunto_residuos: string[] = ["Conjunto1", "Conjunto2", "Conjunto3"];
  const [bombonas, setBombonas] = useState<Bombona[]>([
    { id: 1, title: "Bombona 1" },
  ]);
  // const [selectedGroup, setselectedGroup] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  const addBombona = () => {
    const newId =
      bombonas.length > 0 ? Math.max(...bombonas.map((b) => b.id)) + 1 : 1;
    setBombonas([...bombonas, { id: newId, title: `Bombona ${newId}` }]);
  };

  const deleteCard = (id: number) => {
    if (bombonas.length > 1) {
      setBombonas(bombonas.filter((bombona) => bombona.id !== id));
    } else {
      console.log("impossível ficar com menos de uma bombona ! :(");
      toast({
        variant: "default",
        title: "Impossível deletar",
        description:
          "É necessário haver pelo menos uma bombona para os resíduos",
      });
    }
  };

  const startEditing = (id: number) => {
    setEditingId(id);
  };

  const finishEditing = (id: number, newTitle: string) => {
    setBombonas(
      bombonas.map((bombona) =>
        bombona.id === id ? { ...bombona, title: newTitle } : bombona
      )
    );
    setEditingId(null);
  };

  return (
    <>
      <div className="flex flex-row mx-auto my-10 gap-10">
        <form className="h-[500px]">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col gap-12">
              {bombonas.map((bombona) => (
                <div key={bombona.id}>
                  <Card className="rounded-none flex flex-col  justify-center items-start w-fit h-full p-7">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-col">
                        <CardHeader>
                          {editingId === bombona.id ? (
                            <Input
                              ref={editInputRef}
                              defaultValue={bombona.title}
                              onBlur={(e) =>
                                finishEditing(bombona.id, e.target.value)
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  finishEditing(
                                    bombona.id,
                                    e.currentTarget.value
                                  );
                                }
                              }}
                              className="font-semibold text-lg"
                            />
                          ) : (
                            <CardTitle
                              onClick={() => startEditing(bombona.id)}
                              className="cursor-pointer hover:text-primary transition-colors flex items-center"
                            >
                              {bombona.title}
                              <Edit2 className="ml-2 h-4 w-4" />
                            </CardTitle>
                          )}
                        </CardHeader>

                        <label htmlFor="procedure" className="mb-3">
                          Informe o conjunto de resíduos da bombona
                        </label>
                      </div>
                      <Button
                        type="button"
                        className="bg-red-500 mb-5 "
                        onClick={() => deleteCard(bombona.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <CardContent className="w-full h-full space-y-2 p-0">
                      <div className="flex flex-row gap-4">
                        <Select
                        // onValueChange={(value) => {
                        //   setselectedGroup(value);
                        // }}
                        >
                          <SelectTrigger className="w-[220px] rounded-none border-black">
                            <SelectValue placeholder="Conjunto de resíduos" />
                          </SelectTrigger>
                          <SelectContent>
                            {cojunto_residuos.map((conjunto, index) => (
                              <SelectItem key={index} value={conjunto}>
                                {conjunto}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id={`itemName-${bombona.id}`}
                          className="rounded-none border-black w-[130px]"
                          placeholder="Quantidade"
                          type="number"
                          min={0}
                        />
                        <Select>
                          <SelectTrigger className="w-[100px] rounded-none border-black">
                            <SelectValue placeholder="Unidade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kg</SelectItem>
                            <SelectItem value="g">g</SelectItem>
                            <SelectItem value="l">L</SelectItem>
                            <SelectItem value="mol">Mol</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button type="button" className="bg-blue-500 ">
                          <Plus className="mr-2 h-4 w-4" />
                          Adicionar resíduos ao conjunto
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
              <Button
                type="button"
                className="bg-blue-500 mt-5 w-52"
                onClick={addBombona}
              >
                {" "}
                <Plus className="mr-2 h-4 w-4" />
                Adicionar bombona
              </Button>
            </div>
            <div></div>
          </div>
          <div className="flex justify-end w-full">
            <Button className="bg-emerald-600 mb-5" type="submit">
              Proximo
            </Button>
          </div>
        </form>

        <div>
          <Card className="rounded-none w-fit ">
            <CardContent className="p-4">
              <Button type="button" className="bg-blue-500">
                <Plus className="mr-2 h-4 w-4" />
                Criar novo conjunto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
