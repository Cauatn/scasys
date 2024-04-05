import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useExpContext } from "@/context/ExperimentoContext"
import { useEffect, useState } from "react"
import { set } from "react-hook-form"
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

    console.log("linhas:", rows)
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
          {rows.map((e: any, index: number) => {
            return (
              <TableRow key={uuidv4()}>
                <TableCell className="font-medium">{e.fase}</TableCell>
                <TableCell className="font-medium">{e.etapa}</TableCell>
                <TableCell className="font-medium">
                  {e.especificidade}
                </TableCell>
                <TableCell className="font-medium">{e.item || ""}</TableCell>
                {
                  <TableCell className="font-medium">
                    {e.properties.quantity.map((a: any, index: number) => {
                      if (e.properties.quantity.length === 1)
                        return <>{`[${a.value}]`}</>
                      if (index === 0) return <>{`[${a.value},`}</>
                      if (index === e.properties.quantity.length - 1)
                        return <>{`${a.value}]`}</>
                      return <>{`${a.value},`}</>
                    })}
                  </TableCell>
                }
                {
                  <TableCell className="font-medium">
                    {e.properties.total.toFixed(3).toString() +
                      " " +
                      e.properties.unit}
                  </TableCell>
                }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
