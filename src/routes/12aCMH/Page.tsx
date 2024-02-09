import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons"

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function TwelveaCMH() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedItem] = useState<string>("Composto 1")
  //essa linha pra quando for implementar a logica
  const [value, setValue] = useState(false)

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement
    setSelectedItem(target.textContent ?? "unknown")
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-full flex-col gap-5 space-y-4 xl:w-1/2">
          <div>
            <h1 className="w-full text-2xl font-bold">
              Carcinogenicidade e mutagenicidade
            </h1>
            <div className="mt-2 flex w-full justify-between text-sm text-gray-500">
              Compostos químicos
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="flex min-w-32 flex-row justify-between gap-1 rounded-md border pl-2 pr-2"
                >
                  <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    {selectedValue}
                    {isOpen ? (
                      <TriangleDownIcon className="size-6" />
                    ) : (
                      <TriangleUpIcon className="size-6" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                  <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={setItem}>
                      Composto 1
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={setItem}>
                      Composto 2
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={setItem}>
                      Composto 3
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex w-full items-center justify-between space-x-4">
            <p>Apresenta potencial Cancerigeno ou mutagênico?</p>
            <ToggleGroup type="single" defaultValue="n">
              <ToggleGroupItem
                value="s"
                className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
              >
                S
              </ToggleGroupItem>
              <ToggleGroupItem
                value="n"
                className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
              >
                N
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex w-full flex-1">
            <div className="mt-4 flex w-full flex-col justify-end space-y-6">
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="bibliographic-source"
                >
                  Fonte bibliográfica
                </label>
                <Input
                  id="bibliographic-source"
                  placeholder="Digite a fonte bibliográfica"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/ps"} className="flex justify-end">
          <Button className="w-44 bg-green-400">Próximo</Button>
        </Link>
      </div>
    </>
  )
}
