import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { AlertTriangle, Globe2, Inbox, Menu, Skull } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Nav from "./side-bar"
import { Button } from "./ui/button"
import { useExpContext } from "@/context/ExperimentoContext"

export default function Navbar({ toggleReturnButton = true }) {
  const navigator = useNavigate()

  const { undoLastAction } = useExpContext()

  return (
    <nav className="mb-10 flex h-[48px] w-full items-center justify-start px-4 lg:mb-1">
      <div className="inline-flex h-full w-full items-center">
        <div className="hidden xl:flex">
          {toggleReturnButton && (
            <div className="flex items-center space-x-4 ">
              <Button
                onClick={() => {
                  undoLastAction()
                  navigator(-1)
                }}
                className="flex items-center space-x-2 py-0"
                variant="ghost"
              >
                <ArrowLeftIcon className="size-4" />
                <span>Retornar</span>
              </Button>
            </div>
          )}
        </div>
        <div className="flex w-full flex-row items-center justify-between xl:hidden">
          <div className="flex items-center space-x-4 ">
            <Button
              onClick={() => {
                undoLastAction()
                navigator(-1)
              }}
              className="flex items-center space-x-2 py-0"
              variant="ghost"
            >
              <ArrowLeftIcon className="size-4" />
              <span>Retornar</span>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Nav
                links={[
                  {
                    title: "Inventario",
                    icon: Inbox,
                    variant: "ghost",
                    path: "/inventory",
                    sublinks: [
                      "Adicionar Fase",
                      "Adicionar Etapa",
                      "Adicionar Item",
                      "Quantidade e observações",
                      "Perguntas",
                    ],
                  },
                  {
                    title: "Toxicidade",
                    icon: Skull,
                    variant: "ghost",
                    sublinks: ["tela 1", "tela 2", "tela 3"],
                  },
                  {
                    title: "Segurança",
                    icon: AlertTriangle,
                    variant: "ghost",
                    path: "/ps",
                    sublinks: [
                      "tela 1",
                      "tela 2",
                      "tela 4",
                      "tela 5",
                      "tela 6",
                    ],
                  },
                  {
                    title: "Lorem Ipsium",
                    icon: Globe2,
                    variant: "ghost",
                    sublinks: [
                      "tela 1",
                      "tela 2",
                      "tela 4",
                      "tela 5",
                      "tela 6",
                    ],
                  },
                ]}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
