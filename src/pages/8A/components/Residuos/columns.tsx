
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Item } from "@/context/experiment";

export const columns: ColumnDef<Item>[] = [
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
    accessorKey: "especificidade",
    header: "Especificidade",
    cell: ({ row }) => <div className="">{row.getValue("especificidade")}</div>,
  },
  {
    accessorKey: "formula",
    header: "Fórmula",
    cell: ({ row }) => <div className="">{row.getValue("formula")}</div>,
  },
  {
    accessorKey: "itemName",
    header: "Nome do item",
    cell: ({ row }) => <div className="">{row.getValue("itemName")}</div>,
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
  }
];
