import useScroll from "@/hooks/use-scroll"
//import { useSigninModal } from "@/hooks/use-signin-modal"
import { Button } from "@/components/ui/button"
import { Dialog } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MainNav } from "./main-nav"

import { cn } from "@/lib/utils"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { loginUser } from "@/hooks/user-login"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

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

    loginUser(formData).then(() => {
      navigate("/procedure")
    })

    setIsLoading(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex w-full justify-center transition-all",
        window.location.pathname == "/" ? "bg-transparent" : "backdrop-blur-3xl"
      )}
    >
      <div className="flex h-16 w-full items-center justify-between p-4">
        <MainNav items={items}>{children}</MainNav>
        <div className="flex items-center space-x-3">
          {rightElements}
          {localStorage.getItem("user_id") ? (
            <Avatar>
              <AvatarImage alt="Image" />
              <AvatarFallback>LB</AvatarFallback>
            </Avatar>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="px-3" variant="default" size="lg">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[80%] sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Entre no seu perfil</DialogTitle>
                  <DialogDescription>
                    Acesse sua conta para ter acesso a todos os recursos
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div>
                    <div className="space-y-2">
                      <div>
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
                      </div>
                      <div>
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
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-2">
                      <input type="checkbox" id="remember-me" />
                      <label
                        className="text-sm font-normal"
                        htmlFor="remember-me"
                      >
                        Lembrar de mim
                      </label>
                    </div>
                    <div>
                      <a href="#" className="text-light text-xs text-cyan-600">
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <p className="text-xs">
                      Ainda não tem uma conta?
                      <Link
                        to={"/SignIn"}
                        className="cursor-pointer font-bold text-cyan-600"
                      >
                        {" "}
                        Registre-se!
                      </Link>
                    </p>
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Carregando..." : "Entrar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  )
}
