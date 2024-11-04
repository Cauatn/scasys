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
import { Label } from "@/components/ui/label";

export default function EigthPage() {
  const tableRef = useRef<any>(null);
  const { toast } = useToast();
  const [bombonas, setBombonas] = useState<Bombona[]>([
    {
      id: 1,
      title: "Bombona 1",
      total_quantity: 0,
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
  const [residuos] = useState<Residuo[]>([
    {
      id: 1,
      itemName: "residuo de ferro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [
        [12, "kg"],
        [12, "g"],
      ],
      observation: "obs",
      phaseName: "phase",
      stepName: "step",
      purity: 100,
    },
    {
      id: 2,
      itemName: "residuo de ferro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [
        [12, "kg"],
        [12, "g"],
      ],
      observation: "obs",
      phaseName: "phase2",
      stepName: "step2",
      purity: 100,
    },
    {
      id: 3,
      itemName: "residuo de cobre",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [
        [15, "kg"],
        [15, "g"],
      ],
      observation: "obs",
      phaseName: "phase",
      stepName: "step",
      purity: 100,
    },
    {
      id: 4,
      itemName: "residuo de ouro",
      formula: "formula",
      especificidade: "residuo",
      quantitys: [
        [12, "kg"],
        [15, "g"],
      ],
      observation: "obs",
      phaseName: "phase",
      stepName: "step",
      purity: 100,
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

// hook utilizado para atualizar a quantidade total dos residuos
  const [lastUpdatedBombonaId, setLastUpdatedBombonaId] = useState<
    number | null
  >(null);

  // useEffect para atualizar a quantidade total de residuos quando as relações sao atualizadas
  useEffect(() => {
    if (lastUpdatedBombonaId !== null) {
      updateBombonaTotalQuantity(lastUpdatedBombonaId);
      setLastUpdatedBombonaId(null);
    }
  }, [bombonaResiduoRelations, lastUpdatedBombonaId]);

  // função para adicionar uma bombona na página
  const addBombona = () => {
    const newId =
      bombonas.length > 0 ? Math.max(...bombonas.map((b) => b.id)) + 1 : 1;
    setBombonas([
      ...bombonas,
      { id: newId, title: `Bombona ${newId}`, total_quantity: 0 },
    ]);
  };

  // funcao para deletar uma bombona
  const deleteBombona = (bombonaId: number) => {
    if (bombonas.length > 1) {
      setBombonas((prevBombonas) =>
        prevBombonas.filter((b) => b.id !== bombonaId)
      );
      setBombonaResiduoRelations((prevRelations) =>
        prevRelations.filter((relation) => relation.bombonaId !== bombonaId)
      );
      updateBombonaTotalQuantity(bombonaId);
      toast({
        title: "Bombona removida",
        description: "A bombona foi removida com sucesso.",
        variant: "default",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Impossível deletar",
        description:
          "É necessário haver pelo menos uma bombona para os resíduos",
      });
    }
  };

  // funcao para adicionar um array de residuos em uma bombona
  const addResiduosToBombona = (
    bombonaId: number,
    residuosToAdd: Residuo[]
  ) => {
    if (residuosToAdd.length > 0) {
      const newRelations: {
        bombonaId: number;
        residuoId: number;
        quantity: number;
      }[] = [];

      residuosToAdd.forEach((newResiduo) => {
        const existsInAnyBombona = bombonaResiduoRelations.some(
          (relation) => relation.residuoId === newResiduo.id
        );

        if (!existsInAnyBombona) {
          const numericQuantities = newResiduo.quantitys
            .map((q) => q[0])
            .filter((val) => typeof val === "number");

          const averageQuantity =
            numericQuantities.reduce((acc, val) => acc + val, 0) /
            numericQuantities.length;

          newRelations.push({
            bombonaId,
            residuoId: newResiduo.id,
            quantity: averageQuantity,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Erro ao adicionar resíduo",
            description: `O resíduo ${newResiduo.itemName} já está presente em alguma bombona.`,
          });
        }
      });

      if (newRelations.length > 0) {
        setBombonaResiduoRelations((prevRelations) => [
          ...prevRelations,
          ...newRelations,
        ]);

        // Store the bombonaId to call update function later
        setLastUpdatedBombonaId(bombonaId);

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
    // First, filter out the relation
    setBombonaResiduoRelations((prev) => {
      const updatedRelations = prev.filter(
        (relation) =>
          !(
            relation.bombonaId === bombonaId && relation.residuoId === residuoId
          )
      );

      // atualizando a quantidade total de residuos na bombona
      setLastUpdatedBombonaId(bombonaId);

      return updatedRelations;
    });
  };

  // atualizar a quantidade total de resiudos em uma bombona
  const updateBombonaTotalQuantity = (bombonaId: number) => {
    const totalQuantity = bombonaResiduoRelations
      .filter((relation) => relation.bombonaId === bombonaId)
      .reduce((acc, relation) => acc + relation.quantity, 0);

    setBombonas((prevBombonas) =>
      prevBombonas.map((bombona) =>
        bombona.id === bombonaId
          ? { ...bombona, total_quantity: totalQuantity }
          : bombona
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

  // funcao que atualiza a quantidade dos reisduso quando ela é mudada no input
  const handleResiduoQuantityChange = (
    bombonaId: number,
    residuoId: number,
    newQuantity: number
  ) => {
    setBombonaResiduoRelations((prevRelations) => {
      const updatedRelations = prevRelations.map((relation) =>
        relation.bombonaId === bombonaId && relation.residuoId === residuoId
          ? { ...relation, quantity: newQuantity }
          : relation
      );
  
      const totalQuantity = updatedRelations
        .filter((relation) => relation.bombonaId === bombonaId)
        .reduce((acc, relation) => acc + relation.quantity, 0);

      setBombonas((prevBombonas) =>
        prevBombonas.map((bombona) =>
          bombona.id === bombonaId
            ? { ...bombona, total_quantity: totalQuantity }
            : bombona
        )
      );
  
      return updatedRelations;
    });
  };

  // funcao para calcular o valor medio das quantidades 
  const calculateAverageQuantity = (quantities: number[][]): number => {
    const numericValues = quantities.map((quantityArr) => quantityArr[0]);
  
    const total = numericValues.reduce((sum, value) => sum + value, 0);
    const average = total / numericValues.length;
  
    return average;
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
                        <div className="flex flex-col gap-2">
                          <Label>
                            {`Quantidade total: ${bombona.total_quantity.toPrecision(3)}`}
                          </Label>
                          <div className="flex flex-col gap-1">
                          <Label
                            htmlFor={`quantity-${bombona.id}`}
                          >
                            Quantidade do resíduo:
                          </Label>
                          <Input
                            id={`quantity-${bombona.id}`}
                            type="number"
                            className="w-[100px] h-[30px]"
                            step={0.5}
                            min={0}
                            max={
                              calculateAverageQuantity(
                                residuos.find((residuo) => residuo.id === selectedResiduos[bombona.id])
                                  ?.quantitys || []
                              ) // Calculate the average quantity for the selected residuo
                            }
                            value={
                              bombonaResiduoRelations.find(
                                (relation) =>
                                  relation.bombonaId === bombona.id &&
                                  relation.residuoId ===
                                    selectedResiduos[bombona.id]
                              )?.quantity || 0
                            }
                            onChange={(e) => {
                              const newQuantity = parseFloat(e.target.value);
                              const selectedResiduoId =
                                selectedResiduos[bombona.id];
                              if (
                                !isNaN(newQuantity) &&
                                selectedResiduoId !== null
                              ) {
                                handleResiduoQuantityChange(
                                  bombona.id,
                                  selectedResiduoId,
                                  newQuantity
                                );
                              }
                            }}
                          />
                          </div>
                          
                        </div>
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
                                  onClick={() => {
                                    addResiduosToBombona(
                                      bombona.id,
                                      tableRef.current
                                        .getSelectedRowModel()
                                        .rows.map((row: any) => row.original)
                                    );
                                  }}
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
