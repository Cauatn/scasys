import { Item } from "@/context/experiment";

export interface Bombona {
  id: number;
  title: string;
}

export interface Residuo extends Item {
  id: number;
  phaseName: string;
  stepName: string;
}

export interface BombonaResiduoRelation {
  bombonaId: number;
  residuoId: number;
}