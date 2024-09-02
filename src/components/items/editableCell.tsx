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

    editItem(row.original.step, row.original.phase, row.original.item, {
      itemName: value,
      formula: "string",
      especificidade: "string",
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
