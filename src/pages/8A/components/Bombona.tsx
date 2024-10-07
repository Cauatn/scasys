import { Item } from "@/context/experiment";

interface Bombona {
  id: number;
  title: string;
  residuos: Item[];
}

export function addResiduo(bombona: Bombona, newResiduo: Item): void {
  const exists = bombona.residuos.some(
    (item) => item.itemName === newResiduo.itemName
  );

  if (!exists) {
    bombona.residuos.push(newResiduo);
  } else {
    throw new Error("That residuo already exists in this bombona");
  }
}

export function removeResiduo(bombona: Bombona, itemNameToRemove: string): void {
  const index = bombona.residuos.findIndex(
    (item) => item.itemName === itemNameToRemove
  );

  if (index !== -1) {
    bombona.residuos.splice(index, 1);
  } else {
    throw new Error("Residou not found inside the bombona");
  }
}

export function hasResiduo(bombona: Bombona, itemNameToCheck: string): boolean {
    return bombona.residuos.some((item) => item.itemName === itemNameToCheck);
  }

export default Bombona;