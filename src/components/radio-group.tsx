import { RadioGroup } from "@radix-ui/react-radio-group"
import { Label } from "./ui/label"
import { RadioGroupItem } from "./ui/radio-group"

interface RadioProps {
  label: string
  defaultValue: string
  checkboxes: {
    label: string
    value: string
    id: string
  }[]
  action?: () => void
  changeValueAction?: (value: string) => void
}

export default function Radio({
  label,
  defaultValue,
  checkboxes,
  action,
  changeValueAction,
}: RadioProps) {
  return (
    <div className="flex items-center space-x-4">
      <Label>{label}</Label>
      <RadioGroup
        required
        defaultValue={defaultValue}
        className="flex"
        onValueChange={action ? action : (value) => changeValueAction!(value)}
      >
        <div className="flex items-center space-x-2">
          {checkboxes.map((checkbox) => {
            return (
              <div key={checkbox.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  className="rounded-md border-slate-200 p-4 data-[state=checked]:bg-green-400"
                  value={checkbox.value}
                  id={checkbox.id}
                />
                <Label
                  className="absolute cursor-pointer pl-1"
                  htmlFor={checkbox.id}
                >
                  {checkbox.label}
                </Label>
              </div>
            )
          })}
        </div>
      </RadioGroup>
    </div>
  )
}
