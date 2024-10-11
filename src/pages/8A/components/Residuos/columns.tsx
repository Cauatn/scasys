import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
// import { Item } from "@/context/experiment";
import { Badge } from "@/components/ui/badge";
import Bombona from "../Bombona";

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
    accessorKey: "bombona",
    header: "Bombona",
    cell: ({ row }) => {
      const bombona: Bombona | null = row.getValue("bombona");
      if (bombona != null) {
        return (
          <>
            <Badge className="bg-emerald-500">{bombona.title}</Badge>
          </>
        );
      } else {
        return (
          <>
            <Badge variant="outline">Sem bombona</Badge>
          </>
        );
      }
    },
  },
  {
    accessorKey: "formula",
    header: "Fórmula",
    cell: ({ row }) => <div className="">{row.getValue("formula")}</div>,
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
