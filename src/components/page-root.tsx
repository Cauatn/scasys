import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"

import { cn } from "@/lib/utils"
import { AlertTriangle, Globe2, Inbox, Skull } from "lucide-react"
import ExperimentSwitcher from "./exp-switcher"
import { NavBarT } from "./nav"
import Navbar from "./navbar"
import Radio from "./radio-group"
import Nav from "./side-bar"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { TooltipProvider } from "./ui/tooltip"

export default function PageRoot({ toggleReturnButton = true }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [contactReason, setContactReason] = useState("")
  const [isProblemOnCurrentPage, setIsProblemOnCurrentPage] = useState(true)

  useEffect(() => {
    if (isDialogOpen) {
      setContactReason("")
      setIsProblemOnCurrentPage(true)
    }
  }, [isDialogOpen])

  const checkboxes = [
    {
      label: "S",
      value: "Sim",
      id: "sim",
    },
    {
      label: "N",
      value: "Não",
      id: "nao",
    },
  ]
  const handleContactReasonChange = (value: string) => {
    setContactReason(value)
    if (contactReason === "problem") {
      setIsProblemOnCurrentPage(false)
    } else {
      setIsProblemOnCurrentPage(true)
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <NavBarT
        items={[{ title: "About", href: "/about" }]}
        children={
          <AlertDialog onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
            <AlertDialogTrigger className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
              Suporte
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-4 space-y-1">
                  <h3 className="text-xl font-bold">Mande uma mensagem!</h3>
                  <p className="text-sm font-normal">
                    Encontrou algum problema ou quer fazer uma sugestão? Envie
                    uma mensagem para nossa equipe!
                  </p>
                </AlertDialogTitle>
                <AlertDialogDescription className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="">Selecione o motivo do seu contato:</h3>
                    <div className="max-w-[300px]">
                      <Select
                        required
                        onValueChange={(value) => handleContactReasonChange(value)}
                      >
                        <SelectTrigger id="reason-select">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="problem">Problema</SelectItem>
                          <SelectItem value="suggestion">Sugestão</SelectItem>
                          <SelectItem value="others">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {contactReason === "problem" && (
                    <Radio
                      label="O problema está localizado na página atual?"
                      defaultValue="Sim"
                      checkboxes={checkboxes}
                      action={() =>
                        setIsProblemOnCurrentPage(!isProblemOnCurrentPage)
                      }
                    />
                  )}
                  {isProblemOnCurrentPage === false &&
                    contactReason === "problem" && (
                      <div className="space-y-2">
                        <Label>Em qual página você encontrou o problema?</Label>
                        <div className="max-w-[300px]">
                          <Select required>
                            <SelectTrigger id="page-select">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="pag-1">Pag 1</SelectItem>
                              <SelectItem value="pag-2">pag 2</SelectItem>
                              <SelectItem value="pag-3">pag 3</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                  <div className="space-y-2">
                    <h3>Digite a sua mensagem:</h3>
                    <textarea
                      className="h-20 max-h-40 min-h-20 w-full rounded-md border-2 p-1 outline-2 outline-[#272e3f]"
                      name=""
                      id="problem-description"
                      placeholder="Digite aqui sobre o que você pensando..."
                    ></textarea>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Fechar</AlertDialogCancel>
                <AlertDialogAction>Enviar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
      />
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
