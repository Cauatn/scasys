import { Item } from "@/context/experiment";
import { ColumnDef } from "@tanstack/react-table";
import EditableCell from "./editableCell";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "phase",
    header: "Fase",
    cell: ({ row }) => <div className="size-12">{row.getValue("phase")}</div>,
  },
  {
    accessorKey: "step",
    header: "Etapa",
    cell: ({ row }) => <div>{row.getValue("step")}</div>,
  },
  {
    accessorKey: "formula",
    header: "formula",
    cell: ({ row }) => <div>{row.getValue("formula")}</div>,
  },
  {
    accessorKey: "item",
    header: "item",
    cell: (props) => <EditableCell {...props} />,
  },
];
