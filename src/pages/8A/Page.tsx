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
import Bombona, { Residuo } from "./components/Bombona";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@radix-ui/react-popover";
// import Experiment from "@/context/experiment";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataTable } from "./components/Residuos/data-table";
import { columns } from "./components/Residuos/columns";
import { DialogClose } from "@radix-ui/react-dialog";

export default function EigthPage() {
  const tableRef = useRef<any>(null);
  const { toast } = useToast();
  const [bombonas, setBombonas] = useState<Bombona[]>([
    {
      id: 1,
      title: "Bombona 1",
      residuos: [],
    },
  ]);
  // const [selectedGroup, setselectedGroup] = useState("");
  // const getItemsByEspecificidade = Experiment(
  //   (state) => state.getItemsByEspecificidade
  // );
  // const residuos = getItemsByEspecificidade("residuo");

  // residuos de teste
  const [residuos, setResiduos] = useState<Residuo[]>([
    {
      itemName: "residuo de ferro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
    },
    {
      itemName: "residuo de cobre",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
    },
    {
      itemName: "residuo de ouro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
    },
  ]);

  // hooks para edição do nome das bombonas
  const [editingId, setEditingId] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (editingId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  // função para adicionar uma bombona na página
  const addBombona = () => {
    const newId =
      bombonas.length > 0 ? Math.max(...bombonas.map((b) => b.id)) + 1 : 1;
    setBombonas([
      ...bombonas,
      { id: newId, title: `Bombona ${newId}`, residuos: [] },
    ]);
  };

  // função para deletar uma bombona da página
  const deleteBombona = (id: number) => {
    if (bombonas.length > 1) {
      // Find the bombona to delete
      const bombonaToDelete = bombonas.find((bombona) => bombona.id === id);

      if (bombonaToDelete) {
        // Remove the bombona reference from all its residuos
        bombonaToDelete.residuos.forEach((residuo) => {
          residuo.bombona = undefined; // Or null, depending on your preference
        });

        // Remove the bombona from the list of bombonas
        setBombonas(bombonas.filter((bombona) => bombona.id !== id));

        toast({
          variant: "default",
          title: "Bombona deletada",
          description: "Bombona deletada com sucesso",
        });
      }
    } else {
      toast({
        variant: "default",
        title: "Impossível deletar",
        description:
          "É necessário haver pelo menos uma bombona para os resíduos",
      });
    }
  };

  // função para iniciar a edição do nome de uma bombona
  const startEditing = (id: number) => {
    setEditingId(id);
  };

  // função para terminar a edição do nome de uma bombona
  const finishEditing = (id: number, newTitle: string) => {
    setBombonas((prevBombonas) =>
      prevBombonas.map((bombona) =>
        bombona.id === id ? { ...bombona, title: newTitle } : bombona
      )
    );

    // atualizando o nome da bombona na tabela de residuos
    setResiduos((prevResiduos) =>
      prevResiduos.map((residuo) =>
        residuo.bombona?.id === id
          ? { ...residuo, bombona: { ...residuo.bombona, title: newTitle } }
          : residuo
      )
    );

    setEditingId(null);
  };

  // Função para adicionar residuos à uma bombona
  const addResiduosToBombona = (bombona: Bombona, residuos: Residuo[]) => {
    if (residuos.length > 0) {
      residuos.forEach((newResiduo) => {
        // Verificar se o resíduo já existe em qualquer outra bombona
        const existsInAnyBombona: boolean = bombonas.some((b) =>
          b.residuos.some((residuo) => residuo.itemName === newResiduo.itemName)
        );

        if (!existsInAnyBombona) {
          // Atualizar o estado das bombonas
          setBombonas((prev) => {
            return prev.map((b) => {
              if (b.id === bombona.id) {
                // Retornar uma nova bombona com o array de resíduos atualizado
                return {
                  ...b,
                  residuos: [...b.residuos, newResiduo], // Adicionar o novo resíduo ao array
                };
              }
              return b; // Retornar outras bombonas inalteradas
            });
          });
          // Associar a bombona ao novo resíduo
          newResiduo.bombona = bombona;
        } else {
          // throw new Error("Esse resíduo já existe em alguma bombona.");
          toast({
            variant: "destructive",
            title: "Erro ao adicionar resíduo",
            description: `O resíduo selecionado para adicionar já está presente em alguma bombona.`,
          });
        }
      });
    }
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
                        <CardHeader className="p-0">
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
                              className="cursor-pointer hover:text-primary transition-colors flex items-center pb-5"
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
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            size="icon"
                            type="button"
                            className="bg-red-500 mb-5 "
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <Card className="border-gray-300">
                            <CardHeader>
                              <h4 className="fonnClick={() => deleteBombona(bombona.id)}t-medium leading-none">
                                Confirmar exclusão
                              </h4>
                            </CardHeader>
                            <CardContent>
                              <div className="grid gap-4">
                                <div className="space-y-2">
                                  <p className="text-sm text-muted-foreground">
                                    Tem certeza que deseja excluir{" "}
                                    {bombona.title}?
                                  </p>
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <PopoverClose asChild>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      type="button"
                                    >
                                      Cancelar
                                    </Button>
                                  </PopoverClose>

                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    type="button"
                                    onClick={() => deleteBombona(bombona.id)}
                                  >
                                    Excluir
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </PopoverContent>
                      </Popover>
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
                            {bombona.residuos.length > 0 ? (
                              bombona.residuos.map((residuo, index) => (
                                <SelectItem
                                  key={index}
                                  value={residuo.itemName}
                                >
                                  {residuo.itemName}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="no-residuo">
                                Sem resíduos na bombona
                              </SelectItem>
                            )}
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
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button type="button" className="bg-blue-500 ">
                              <Plus className="mr-2 h-4 w-4" />
                              Adicionar resíduos ao conjunto
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-fit">
                            <DialogHeader>
                              <DialogTitle>
                                {" "}
                                Adicionar novo(s) resíduo(s) à {
                                  bombona.title
                                }{" "}
                              </DialogTitle>
                              <DialogDescription>
                                {" "}
                                Adicione resíduos à bombona{" "}
                              </DialogDescription>
                            </DialogHeader>
                            <div>
                              <DataTable
                                data={residuos}
                                columns={columns}
                                ref={tableRef}
                              ></DataTable>
                            </div>
                            <DialogClose asChild>
                              <div className="flex justify-end">
                                <Button
                                  className="bg-emerald-600 w-52 "
                                  onClick={() =>
                                    addResiduosToBombona(
                                      bombona,
                                      tableRef.current
                                        .getSelectedRowModel()
                                        .rows.map((row: any) => row.original)
                                    )
                                  }
                                >
                                  {" "}
                                  Adicionar{" "}
                                </Button>
                              </div>
                            </DialogClose>
                          </DialogContent>
                        </Dialog>
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
      </div>
    </>
  );
}
