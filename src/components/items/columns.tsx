import { Item } from "@/context/experiment";
import { ColumnDef } from "@tanstack/react-table";
import EditableCell from "./editableCell";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "phase",
    header: "Fase",
    // cell: ({ row }) => <div className="size-12">{row.getValue("phase")}</div>,
    cell: (props) => <EditableCell {...props} />,
  },
  {
    accessorKey: "step",
    header: "Etapa",
    cell: (props) => <EditableCell {...props} />,
  },
  {
    accessorKey: "specificity",
    header: "especificidade",
    cell: (props) => <EditableCell {...props} />,
  },
  {
    accessorKey: "formula",
    header: "formula",
    cell: (props) => <EditableCell {...props} />,
  },
  {
    accessorKey: "item",
    header: "item",
    cell: (props) => <EditableCell {...props} />,
  },
  {
    accessorKey: "quantitys",
    header: "quantitys",
    cell: (props) => <EditableCell {...props} />,
  },
];
