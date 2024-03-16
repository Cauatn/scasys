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

export type ExpItems = {
  id: number
  fase: string
  etapa: string
  especificidade: string
  item: string
  status: "selected" | "not-selected"
}

export type compostItem = {
  id: number
  status: "selected" | "not-selected"
  composto: string
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

export const columnsCompost: ColumnDef<compostItem>[] = [
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
    accessorKey: "composto",
    header: "Composto",
  },
  {
    accessorKey: "currentEtapa",
    header: "Etapa Atual",
  },
  {
    accessorKey: "currentPhase",
    header: "Fase Atual",
  },
]

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
    accessorKey: "items",
    header: "Item",
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
