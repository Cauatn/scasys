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
import { Bombona, Residuo, BombonaResiduoRelation } from "./components/Bombona";
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
    },
  ]);

  const [selectedResiduos, setSelectedResiduos] = useState<{
    [bombonaId: number]: number | null;
  }>({});


  // Recuperando os residuos do contexto do aplicativo
  // const getItemsByEspecificidade = Experiment(
  //   (state) => state.getItemsByEspecificidade
  // );

  // const [residuos, setResiduos] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchedResiduos = getItemsByEspecificidade("residuo");

  //   // Assign unique numeric IDs to each residuo
  //   const residuoWithIds = fetchedResiduos.map((residuo, index) => ({
  //     ...residuo,
  //     id: index + 1, // Use index + 1 for unique ID starting from 1
  //   }));

  //   setResiduos(residuoWithIds);
  // }, []);

  // residuos de teste
  const [residuos, setResiduos] = useState<Residuo[]>([
    {
      id: 1,
      itemName: "residuo de ferro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
      phaseName: "phase",
      stepName: "step",
    },
    {
      id: 2,
      itemName: "residuo de ferro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
      phaseName: "phase2",
      stepName: "step2",
    },
    {
      id: 3,
      itemName: "residuo de cobre",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
      phaseName: "phase",
      stepName: "step",
    },
    {
      id: 4,
      itemName: "residuo de ouro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [],
      observation: "obs",
      phaseName: "phase",
      stepName: "step",
    },
  ]);

  // hook para o link entre bombonas e residuos
  const [bombonaResiduoRelations, setBombonaResiduoRelations] = useState<
    BombonaResiduoRelation[]
  >([]);

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
    setBombonas([...bombonas, { id: newId, title: `Bombona ${newId}` }]);
  };

  // funcao para deletar uma bombona
  const deleteBombona = (bombonaId: number) => {
    // nao permitir deletar a ultima bombona 
    if (bombonas.length > 1) {
      // removendo a bombona da lista de bombonas
      setBombonas((prevBombonas) =>
        prevBombonas.filter((b) => b.id !== bombonaId)
      );

      // Removendo todas as relacoes entre a bombona e os residuos
      setBombonaResiduoRelations((prevRelations) =>
        prevRelations.filter((relation) => relation.bombonaId !== bombonaId)
      );

      // Mostrando uma notificao para informar o usuario da operação realizada
      toast({
        title: "Bombona removida",
        description: `A bombona foi removida com sucesso.`,
        variant: "default",
      });
    } else {
      toast({
        variant: "default",
        title: "Impossível deletar",
        description:
          "É necessário haver pelo menos uma bombona para os resíduos",
      });
    }
  };

  // adicionando um link entre bombona e residuo
  const addResiduosToBombona = (
    bombonaId: number,
    residuosToAdd: Residuo[]
  ) => {
    if (residuosToAdd.length > 0) {
      const newRelations: { bombonaId: number; residuoId: number }[] = [];

      residuosToAdd.forEach((newResiduo) => {
        // Cchecando se o residuo ja nao está presente em alguma outra bombona
        const existsInAnyBombona = bombonaResiduoRelations.some(
          (relation) => relation.residuoId === newResiduo.id
        );

        if (!existsInAnyBombona) {
          // Criando uma nova relacao entre bombona e residuo
          newRelations.push({ bombonaId, residuoId: newResiduo.id });
        } else {
          // Mostrando uma moessagem de erro para informar que o residuo já está presente em uma bombona
          toast({
            variant: "destructive",
            title: "Erro ao adicionar resíduo",
            description: `O resíduo ${newResiduo.itemName} já está presente em alguma bombona.`,
          });
        }
      });

      if (newRelations.length > 0) {
        //atualizando as relações 
        setBombonaResiduoRelations((prevRelations) => [
          ...prevRelations,
          ...newRelations,
        ]);
        // informando o usuário do sucesso na operação
        toast({
          variant: "default",
          title: "Resíduos adicionados",
          description: `${newRelations.length} resíduos foram adicionados à bombona.`,
        });
      }
    }
  };

  // função para recuperar os residuos que estão presentes em uma bombona
  const getResiduosForBombona = (bombonaId: number) => {
    const residuoIds = bombonaResiduoRelations
      .filter((relation) => relation.bombonaId === bombonaId)
      .map((relation) => relation.residuoId);

    return residuos.filter((residuo) => residuoIds.includes(residuo.id));
  };

  // funcao para deletar um residuo de uma bombona
  const removeResiduoFromBombona = (bombonaId: number, residuoId: number) => {
    setBombonaResiduoRelations((prev) =>
      prev.filter(
        (relation) =>
          !(
            relation.bombonaId === bombonaId && relation.residuoId === residuoId
          )
      )
    );
  };

  // fncao que gerencia o click no botao de deletar residuo selecionado de uma bombona
  const handleResiduoRemoval = (bombonaId: number) => {
    if (
      selectedResiduos[bombonaId] !== undefined &&
      selectedResiduos[bombonaId] !== null && 
      bombonaResiduoRelations.length > 0
    ) {
      const residuoId = selectedResiduos[bombonaId]!;

      removeResiduoFromBombona(bombonaId, residuoId);

      setSelectedResiduos((prev) => ({
        ...prev,
        [bombonaId]: null, // Clear selection after deletion
      }));

      toast({
        variant: "default",
        title: "Resíduo removido",
        description: "O resíduo foi removido da bombona com sucesso.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erro ao remover",
        description: "Nenhum resíduo foi selecionado para remoção.",
      });
    }
  };

  // função para iniciar a edição do nome de uma bombona
  const startEditing = (id: number) => {
    setEditingId(id);
  };

  // função para terminar a edição do nome de uma bombona
  const finishEditing = (id: number, newTitle: string) => {
    // Atualizar o nome da bombona no array no bombonas
    setBombonas((prevBombonas) =>
      prevBombonas.map((bombona) =>
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
                          value={
                            selectedResiduos[bombona.id]
                              ? selectedResiduos[bombona.id]?.toString()
                              : ""
                          }
                          onValueChange={(value) => {
                            setSelectedResiduos((prev) => ({
                              ...prev,
                              [bombona.id]: parseInt(value),
                            }));
                          }}
                        >
                          <SelectTrigger className="w-[500px] rounded-none border-black">
                            <SelectValue placeholder="Conjunto de resíduos" />
                          </SelectTrigger>
                          <SelectContent>
                            {getResiduosForBombona(bombona.id).length > 0 ? (
                              getResiduosForBombona(bombona.id).map(
                                (residuo, index) => (
                                  <SelectItem
                                    key={index}
                                    value={residuo.id.toString()}
                                  >
                                    {`${residuo.itemName} (${residuo.stepName} - ${residuo.phaseName})`}
                                  </SelectItem>
                                )
                              )
                            ) : (
                              <SelectItem value="no-residuo">
                                Sem resíduos na bombona
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>

                        <Button
                          size="icon"
                          type="button"
                          className="bg-red-500 mb-5"
                          onClick={() => handleResiduoRemoval(bombona.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

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
                                bombonas={bombonas}
                                bombonaResiduoRelation={bombonaResiduoRelations}
                              ></DataTable>
                            </div>
                            <DialogClose asChild>
                              <div className="flex justify-end">
                                <Button
                                  className="bg-emerald-600 w-52 "
                                  onClick={() =>
                                    addResiduosToBombona(
                                      bombona.id,
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
      {/* Logging os dados da tela para entneder o que está acontecendo */}
      <div>
        <pre>{JSON.stringify(bombonas, null, 2)}</pre>
        <pre>{JSON.stringify(residuos, null, 2)}</pre>
        <pre>{JSON.stringify(bombonaResiduoRelations, null, 2)}</pre>
      </div>
    </>
  );
}
