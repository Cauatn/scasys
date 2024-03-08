import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Item = {
  id: number
  amount: number
  status: "selected" | "not-selected"
  residuo: string
  currentPhase: string
  currentEtapa: string
}

export const columnsResidue: ColumnDef<Item>[] = [
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
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "residuo",
    header: "Residuo",
  },
  {
    accessorKey: "currentEtapa",
    header: "Etapa Atual",
  },
  {
    accessorKey: "currentPhase",
    header: "Fase Atual",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
