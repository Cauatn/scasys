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

/**
 * @param {
 *          "experimeto": {
 *            "nome": string,
 *            "modoDeCalculo": "string",
 *          "fases" : {
 *           "inicial/int/final" : {
 *            "etapas": {
 *             "nomeEtapa": {
 *              "items": {
 *               "..." : {
 *                "especificidade": string,
 *               "item": string,
 *                 "formula": string
 *               }
 *              }
 *           }
 *         }
 *       }
 *     }
 *   }
 *  }
 **/

export function ItemsTable(props: any) {
  const [rows, setRows] = useState<
    | {
        fase: string
        etapa: string
        especificidade: string
        item: string
      }[]
    | []
  >([])

  const { experimento } = useExpContext()

  useEffect(() => {
    let rows: any = []
    for (let fase in experimento.fases) {
      for (let etapa in experimento.fases[fase].etapas) {
        for (let item in experimento.fases[fase].etapas[etapa].items) {
          rows.push({
            fase: fase,
            etapa: etapa,
            especificidade:
              experimento.fases[fase].etapas[etapa].items[item].especificidade,
            item: item,
          })
        }
      }
    }
    setRows(rows)
  }, [experimento])

  return (
    <div className=" rounded-md border">
      <Table className={props.class}>
        <TableHeader>
          <TableRow>
            <TableHead>Fase</TableHead>
            <TableHead>Etapa procedimental</TableHead>
            <TableHead>Especificidade</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((e: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{e.fase}</TableCell>
                <TableCell className="font-medium">{e.etapa}</TableCell>
                <TableCell className="font-medium">
                  {e.especificidade || ""}
                </TableCell>
                <TableCell className="font-medium">{e.item || ""}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
