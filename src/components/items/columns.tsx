import { Item } from "@/context/experiment";
import { ColumnDef } from "@tanstack/react-table";
import EditableCell from "./editableCell";

export const columns = [
  {
    header: "Phase",
    accessorKey: "phase",
  },
  {
    header: "Step",
    accessorKey: "step",
  },
  {
    header: "Item",
    accessorKey: "item",
  },
  {
    header: "Specificity",
    accessorKey: "specificity",
  },
  {
    header: "Formula",
    accessorKey: "formula",
  },
  {
    header: "Observation",
    accessorKey: "observation",
  },
  {
    header: "Quantity",
    accessorKey: "quantitys",
  },
  {
    header: "Purity", // Add a new column for purity
    accessorKey: "purity", // Ensure this matches the key in the transformed data
  },
];
