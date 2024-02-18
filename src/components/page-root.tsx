import { useState } from "react"
import { Outlet } from "react-router-dom"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"

import { cn } from "@/lib/utils"
import { AlertTriangle, Globe2, Inbox, Moon, Skull } from "lucide-react"
import Nav from "./side-bar"
import { Separator } from "./ui/separator"
import { TooltipProvider } from "./ui/tooltip"
import { NavBarT } from "./nav"
import Navbar from "./navbar"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <NavBarT />
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          collapsedSize={4}
          collapsible={true}
          minSize={16}
          maxSize={20}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
            "hidden flex-col xl:flex"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            {isCollapsed ? (
              <Moon />
            ) : (
              <h1 className="pl-3 text-2xl font-bold">LABEL</h1>
            )}
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
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
          <Separator />
        </ResizablePanel>
        <ResizableHandle withHandle className="hidden xl:flex" />
        <ResizablePanel className="flex h-full w-full flex-col overflow-scroll">
          <Navbar toggleReturnButton={toggleReturnButton} />
          <Separator />
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
