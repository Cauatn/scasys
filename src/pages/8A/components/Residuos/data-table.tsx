import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { forwardRef, useImperativeHandle } from "react";
import { Badge } from "@/components/ui/badge";
import { Bombona, BombonaResiduoRelation } from "../Bombona";

// interface BombonaResiduoRelation {
//   residuoId: number;
//   bombonaId: number;
// }

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<any, TValue>[];
  data: TData[];
  bombonas: Bombona[]; // Array of Bombonas
  bombonaResiduoRelation: BombonaResiduoRelation[]; // Array of relations
}

export const DataTable = forwardRef(function DataTable<TData, TValue>(
  { columns, data, bombonas, bombonaResiduoRelation }: DataTableProps<TData, TValue>,
  ref: React.Ref<any>
) {
  const [rowSelection, setRowSelection] = React.useState({});

  // Create bombonaMap to lookup bombona by id
  const bombonaMap: Record<number, Bombona> = React.useMemo(() => {
    return Object.fromEntries(bombonas.map(bombona => [bombona.id, bombona]));
  }, [bombonas]);

  const table = useReactTable({
    data,
    columns,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
  });

  useImperativeHandle(ref, () => table);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.id === "bombona_id") {
                    // Get the residuoId for this row
                    const residuoId: number = row.original.id;

                    // Find the matching relation from bombonaResiduoRelation
                    const relation = bombonaResiduoRelation.find(
                      (rel) => rel.residuoId === residuoId
                    );

                    // Retrieve the bombonaId and corresponding bombona
                    const bombonaId = relation?.bombonaId;
                    const bombona = bombonaId ? bombonaMap[bombonaId] : undefined;

                    return (
                      <TableCell key={cell.id}>
                        {bombona ? (
                          <Badge className="bg-emerald-500">{bombona.title}</Badge>
                        ) : (
                          <Badge variant="outline">Sem bombona</Badge>
                        )}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Sem resíduos no experimento.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex-1 text-sm text-muted-foreground p-2 ml-1">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </div>
  );
});
