import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Experiment from "@/context/experiment";

function EditableCell({ getValue, row, column, table }: any) {
  const initialValue = getValue();
  const [value, setValue] = useState("");

  const editItem = Experiment((state) => state.editItem);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);

    console.log(column.id);
    console.log(row.original);

    editItem(row.original.step, row.original.phase, row.original.item, {
      itemName: column.id === "item" ? value : row.original.item,
      formula: column.id === "formula" ? value : row.original.formula,
      especificidade:
        column.id === "especificidade" ? value : row.original.especificidade,
      quantitys: column.id === "quantitys" ? value : row.original.quantitys,
      observation:
        column.id === "observation" ? value : row.original.observation,
    });
  };

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="rounded-none"
    />
  );
}

export default EditableCell;
