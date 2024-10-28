import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "itemName",
    header: "Nome do item",
    cell: ({ row }) => <div className="">{row.getValue("itemName")}</div>,
  },
  {
    accessorKey: "bombona_id",
    header: "Bombona",
    cell: ({ row }) => {
      // A bombona vai ser renderizada no componente DataTable
      return <div>{row.getValue("bombona_id")}</div>;
    },
  },
  {
    accessorKey: "formula",
    header: "Fórmula",
    cell: ({ row }) => <div className="">{row.getValue("formula")}</div>,
  },
  {
    accessorKey: "phaseName",
    header: "Fase",
    cell: ({ row }) => <div className="">{row.getValue("phaseName")}</div>,
  },
  {
    accessorKey: "stepName",
    header: "Etapa",
    cell: ({ row }) => <div className="">{row.getValue("stepName")}</div>,
  },
  {
    accessorKey: "quantitys",
    header: "Quantidades",
    cell: ({ row }) => <div className="">{row.getValue("quantitys")}</div>,
  },
  {
    accessorKey: "observation",
    header: "Observação",
    cell: ({ row }) => <div className="">{row.getValue("observation")}</div>,
  },
];
