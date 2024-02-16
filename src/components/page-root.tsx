import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"

import { cn } from "@/lib/utils"
import { AlertTriangle, Globe2, Inbox, Skull } from "lucide-react"
import Nav from "./side-bar"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          maxSize={16}
          minSize={10}
          className="hidden xl:flex xl:flex-col"
        >
          <div
            className={cn(
              "flex h-16 items-center justify-start",
              isCollapsed ? "h-16" : "px-2"
            )}
          >
            <h1 className="pl-3 text-2xl font-bold">SCASYS</h1>
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
        <ResizableHandle withHandle className="hidden xl:flex" />
        <ResizablePanel className="flex h-full w-full flex-col overflow-scroll">
          <Navbar toggleReturnButton={toggleReturnButton} />
          {/* <ScrollArea className="m-4 h-full rounded-lg border shadow"> */}
          <Outlet />
          {/* </ScrollArea> */}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}
