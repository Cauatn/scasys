import useScroll from "@/hooks/use-scroll"
//import { useSigninModal } from "@/hooks/use-signin-modal"
import { Button } from "@/components/ui/button"
import { MainNav } from "./main-nav"
import { useState } from "react"
import { Dialog } from "@radix-ui/react-dialog"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

//import { MainNav } from "./main-nav"
//import { NormalizedUser, UserAccountNav } from "./user-account-nav"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

interface NavBarProps {
  //user: NormalizedUser | null
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

interface FormData {
  email: string
  password: string
}

export function NavBarT({
  //user,
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const handleFormEdit = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: keyof FormData
  ) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Usando POST em vez de GET para a operação de login
      const response = await axios.post(
        "http://localhost:3333/user/login",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      //console.log(response);
      navigate("/procedure")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between p-4">
        <MainNav items={items}>{children}</MainNav>
        <div className="flex items-center space-x-3">
          {rightElements}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-3" variant="default" size="lg">
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Entre no seu perfil !</DialogTitle>
                <DialogDescription>
                  Acesse sua conta para ter acesso a todos os recursos
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      className="col-span-3"
                      placeholder="nome@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      required
                      value={formData.email}
                      onChange={(e) => {
                        handleFormEdit(e, "email")
                      }}
                    />

                    <Label htmlFor="username" className="text-right">
                      Senha
                    </Label>
                    <Input
                      id="password"
                      placeholder="Senha"
                      className="col-span-3 w-full"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="new-password"
                      autoCorrect="off"
                      disabled={isLoading}
                      required
                      value={formData.password}
                      onChange={(e) => {
                        handleFormEdit(e, "password")
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Carregando..." : "Entrar"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
