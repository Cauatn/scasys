import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"

import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  Globe2,
  Inbox,
  LayoutDashboard,
  Skull,
} from "lucide-react"
import ExperimentSwitcher from "./exp-switcher"
import { NavBarT } from "./nav"
import Navbar from "./navbar"
import Nav from "./side-bar"
import Support from "./support-dialog"
import { buttonVariants } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { Toaster } from "./ui/toaster"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <NavBarT children={<Support />} />
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
            <ExperimentSwitcher isCollapsed={isCollapsed} />
          </div>
          <Separator />
          <nav className="mt-1">
            {isCollapsed ? (
              <div className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      to="#"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "h-9 w-9",
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      )}
                    >
                      <LayoutDashboard className="size-4" />
                      <span className="sr-only">Dashboard</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    DashBoard
                  </TooltipContent>
                </Tooltip>
              </div>
            ) : (
              <div
                className={cn(
                  "flex space-x-2 p-1 lg:flex-col lg:space-x-0 lg:space-y-1"
                )}
              >
                <Link
                  to={"/dashboard"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "hover:bg-transparent hover:underline",
                    "hover:bg-muted",
                    "justify-start gap-3"
                  )}
                >
                  <LayoutDashboard className="size-4 " />
                  Dashboard
                </Link>
              </div>
            )}
          </nav>
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
          <ScrollArea className="flex-1 overflow-y-auto">
            <Outlet />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
      <Toaster />
    </TooltipProvider>
  )
}
