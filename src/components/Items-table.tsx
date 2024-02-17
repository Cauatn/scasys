import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ItemsTable() {
  const items = []

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fase</TableHead>
          <TableHead>Etapa procedimental</TableHead>
          <TableHead>Especificidade</TableHead>
          <TableHead>Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((e) => {
          return (
            <TableRow>
              <TableCell className="font-medium">{}</TableCell>
              <TableCell className="font-medium">{}</TableCell>
              <TableCell className="font-medium">{}</TableCell>
              <TableCell className="font-medium">{}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
