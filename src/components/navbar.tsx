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

export default function Navbar({ toggleReturnButton = true }) {
  const navigator = useNavigate()
  const links = [
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
  ]
  return (
    <nav className="mb-10 flex h-16 w-full items-center justify-start px-8 pt-3 lg:mb-6">
      <div className="inline-flex h-full w-full items-center space-x-4">
        {toggleReturnButton && (
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => navigator(-1)}
              className="flex items-center space-x-2 py-0"
              variant="ghost"
            >
              <ArrowLeftIcon className="size-4" />
              <span>Retornar</span>
            </Button>
          </div>
        )}
        <div className="flex w-full items-center justify-between xl:hidden">
          <h1 className="flex text-2xl font-bold">SCASYS</h1>
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
                      "tela 1",
                      "tela 2",
                      "tela 3",
                      "tela 4",
                      "tela 5",
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
