import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"
import { useState } from "react"
import { SideBar } from "./side-bar"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Separator } from "./ui/separator"

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <Navbar toggleReturnButton={toggleReturnButton} />
      <Separator />
      <ResizablePanelGroup
        direction="horizontal"
        className="flex h-full w-screen flex-row items-stretch"
      >
        <ResizablePanel maxSize={16} minSize={10}>
          <SideBar
            links={[
              {
                title: "Inventario",
                label: "5",
                icon: Inbox,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="mx-10 flex h-full w-full flex-col justify-between">
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}
