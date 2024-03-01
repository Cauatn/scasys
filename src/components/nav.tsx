import useScroll from "@/hooks/use-scroll"
//import { useSigninModal } from "@/hooks/use-signin-modal"
import { Button } from "@/components/ui/button"
import { MainNav } from "./main-nav"
import { UserAccountNav } from "./user-account-nav"
import { useState } from "react"
import { Dialog } from "@radix-ui/react-dialog"
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

export function NavBarT({
  //user,
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50)

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
          {
            /*users */ false ? (
              <UserAccountNav
                user={{
                  name: "Cauã Tavares",
                  email: "tavarescauac@gmail.com",
                  imageUrl: "https://github.com/Cauatn.png",
                }}
              />
            ) : (
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
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        className="col-span-3"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Senha
                      </Label>
                      <Input
                        id="password"
                        className="col-span-3"
                        placeholder="senha123"
                        type="password"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Entrar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )
          }
        </div>
      </div>
    </header>
  )
}
