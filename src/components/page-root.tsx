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
import { ScrollArea } from "./ui/scroll-area"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel maxSize={16} minSize={10}>
          <div
            className={cn(
              "flex h-16 items-center justify-start",
              isCollapsed ? "h-16" : "px-2"
            )}
          >
            <h1 className="pl-3 text-xl font-bold">SCASYS</h1>
          </div>
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
        <ResizablePanel className="flex h-full w-full flex-col overflow-scroll">
          <Navbar toggleReturnButton={toggleReturnButton} />
          <ScrollArea className="m-4 rounded-lg border shadow">
            <Outlet />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}
