import { Item } from "@/context/experiment";

export interface Bombona {
  id: number;
  title: string;
  total_quantity: number;
}

export interface Residuo extends Item {
  id: number;
  phaseName: string;
  stepName: string;
}

export interface BombonaResiduoRelation {
  bombonaId: number;
  residuoId: number;
  quantity: number;
}