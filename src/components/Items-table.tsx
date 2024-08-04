import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useConjContext } from "@/context/ConjuntoContext"
import { useExpContext } from "@/context/ExperimentoContext"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export function ItemsTable(props: any) {
  const [rows, setRows] = useState<
    Array<{
      fase: string
      etapa: string
      especificidade: string
      item: string
      quantidade: number
      total: number
    }>
  >([])

  const { listItems } = useExpContext()
  const { setResiduos } = useConjContext()

  useEffect(() => {
    setRows(() => {
      let rows = listItems.map((e: any) => {
        return {
          fase: e.currentPhase,
          etapa: e.currentEtapa,
          especificidade: e.especificidade,
          item: e.items,
          properties: {
            quantity: e.properties.quantity,
            total: e.properties.total,
            unit: e.properties.unit,
          },
        }
      })

      return rows
    })
  }, [listItems])

  return (
    <div className="rounded-md border">
      <Table className={props.class}>
        <TableHeader>
          <TableRow>
            <TableHead>Fase</TableHead>
            <TableHead>Etapa procedimental</TableHead>
            <TableHead>Especificidade</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Quantidade(s)</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((e: any, rowIndex: number) => {
              return (
                <TableRow key={e.id || rowIndex}>
                  <TableCell className="font-medium">{e.fase}</TableCell>
                  <TableCell className="font-medium">{e.etapa}</TableCell>
                  <TableCell className="font-medium">
                    {e.especificidade}
                  </TableCell>
                  <TableCell className="font-medium">{e.item}</TableCell>
                  <TableCell className="font-medium">
                    {e.properties.quantity.map((a: any, index: number) => {
                      if (e.properties.quantity.length === 1)
                        return <span key={index}>{`[${a.value}]`}</span>
                      if (index === 0)
                        return <span key={index}>{`[${a.value},`}</span>
                      if (index === e.properties.quantity.length - 1)
                        return <span key={index}>{`${a.value}]`}</span>
                      return <span key={index}>{`${a.value},`}</span>
                    })}
                  </TableCell>
                  <TableCell className="font-medium">
                    {e.properties.unit === "undefined"
                      ? e.properties.total.toFixed(3).toString()
                      : e.properties.total.toFixed(3).toString() +
                        " " +
                        e.properties.unit}
                  </TableCell>
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center text-sm font-medium"
              >
                Informe os campos do item para que ele seja adicionado ao
                experimento
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
