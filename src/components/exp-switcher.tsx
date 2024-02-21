import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ChevronDown } from "lucide-react"

type SwitcherProps = {
  isCollapsed: boolean
}

const experimentos = [
  {
    value: "experimento1",
    label: "experimento 1",
  },
  {
    value: "experimento2",
    label: "experimento 2",
  },
  {
    value: "experimento3",
    label: "experimento 3",
  },
  {
    value: "experimento4",
    label: "experimento 4",
  },
  {
    value: "experimento5",
    label: "experimento 5",
  },
]

export default function ExperimentSwitcher({ isCollapsed }: SwitcherProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a workspace"
          className={cn(
            "flex w-full items-center gap-2 border [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
            isCollapsed &&
              "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
          )}
        >
          <div className="flex justify-between">
            <Avatar className={cn("h-5 w-5", !isCollapsed && "mr-2")}>
              <AvatarImage src={"https://github.com/Cauatn.png"} />
              <AvatarFallback>{"N"}</AvatarFallback>
            </Avatar>
            <span className={cn("whitespace-nowrap", isCollapsed && "hidden")}>
              {"Nome do experimento"}
            </span>
          </div>
          <ChevronDown
            className={cn(
              "ml-auto h-4 w-4 shrink-0 opacity-50",
              isCollapsed && "hidden"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Busque um experimento..."
            className="h-9 text-[13px]"
          />
          <CommandEmpty>Experimento não encontrado.</CommandEmpty>
          <CommandGroup>
            {experimentos.map((experimento) => (
              <CommandItem
                key={experimento.value}
                value={experimento.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {experimento.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === experimento.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
