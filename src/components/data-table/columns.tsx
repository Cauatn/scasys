import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "../ui/badge"

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

export type ExpItems = {
  id: number
  fase: string
  etapa: string
  especificidade: string
  item: string
  status: "selected" | "not-selected"
}

export const columnsItems: ColumnDef<ExpItems>[] = [
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
        onCheckedChange={(value) => {
          row.toggleSelected(!!value)
        }}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      if (row.original.status == "selected") {
        return <Badge variant="green">Feita operação</Badge>
      } else {
        return <Badge variant="default">Não selecionado</Badge>
      }
    },
  },
  {
    accessorKey: "items",
    header: "Nome do item",
  },
  {
    accessorKey: "formula",
    header: "Formula Química",
  },
  {
    accessorKey: "especificidade",
    header: "Especificidade",
  },
  {
    accessorKey: "currentEtapa",
    header: "Etapa",
  },
  {
    accessorKey: "currentPhase",
    header: "Fase",
  },
]
