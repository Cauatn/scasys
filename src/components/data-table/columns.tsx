import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "../ui/badge"

export type ExpItems = {
  id: number
  fase: string
  etapa: string
  especificidade: string
  item: string
  status: "selected" | "not-selected"
}

export type ResidueItem = {
  id: number
  fase: string
  etapa: string
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

export const columnsResidue: ColumnDef<ResidueItem>[] = [
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
    accessorKey: "item",
    header: "Nome do item",
  },
  {
    accessorKey: "stage",
    header: "Etapa",
  },
  {
    accessorKey: "phase",
    header: "Fase",
  },
  {
    accessorKey: "total",
    header: "massa Total",
  },
  {
    accessorKey: "unit",
    header: "Unidade",
  },
]
