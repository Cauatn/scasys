import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"
import { useState } from "react"
import { Separator } from "./ui/separator"

import { Inbox, Globe2, Skull, AlertTriangle } from "lucide-react"
import Nav from "./side-bar"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex h-full w-screen flex-row items-stretch"
      >
        <ResizablePanel maxSize={16} minSize={12}>
          <div
            className={cn(
              "flex h-16 items-center justify-center",
              isCollapsed ? "h-16" : "px-2"
            )}
          >
            <Select>
              <SelectTrigger
                className={cn(
                  "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
                  isCollapsed &&
                    "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
                )}
                aria-label="Select account"
              >
                <SelectValue placeholder="Selecione um opção">
                  <span className={cn("ml-2", isCollapsed && "hidden")}>
                    {"teste"}
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"op"}>
                  <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                    teste 1
                  </div>
                </SelectItem>
                <SelectItem value={"op2"}>
                  <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                    teste 2
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <Nav
            links={[
              {
                title: "Inventario",
                label: "5",
                icon: Inbox,
                variant: "ghost",
                path: "/inventory",
                sublinks: ["tela 1", "tela 2", "tela 3", "tela 4", "tela 5"],
              },
              {
                title: "Toxicidade",
                label: "3",
                icon: Skull,
                variant: "ghost",
                sublinks: ["tela 1", "tela 2", "tela 3"],
              },
              {
                title: "Segurança",
                label: "6",
                icon: AlertTriangle,
                variant: "ghost",
                path: "/ps",
                sublinks: ["tela 1", "tela 2", "tela 4", "tela 5", "tela 6"],
              },
              {
                title: "Lorem Ipsium",
                label: "9",
                icon: Globe2,
                variant: "ghost",
                sublinks: ["tela 1", "tela 2", "tela 4", "tela 5", "tela 6"],
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="flex h-full w-full flex-col">
          <Navbar toggleReturnButton={toggleReturnButton} />
          <Separator />
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}
