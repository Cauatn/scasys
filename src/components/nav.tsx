import useScroll from "@/hooks/use-scroll"
//import { useSigninModal } from "@/hooks/use-signin-modal"
import { Button } from "@/components/ui/button"
import { MainNav } from "./main-nav"
import { UserAccountNav } from "./user-account-nav"

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
  //const signInModal = useSigninModal()

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
            /*users */ true ? (
              <UserAccountNav
                user={{
                  name: "Cauã Tavares",
                  email: "tavarescauac@gmail.com",
                  imageUrl: "https://github.com/Cauatn.png",
                }}
              />
            ) : (
              <Button
                className="px-3"
                variant="default"
                size="sm"
                //onClick={signInModal.onOpen}
              >
                Sign In
              </Button>
            )
          }
        </div>
      </div>
    </header>
  )
}
