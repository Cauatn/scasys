import { Link } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import { useState } from "react"

export default function Nav({ links, isCollapsed, path }: any) {
  const [openStates, setOpenStates] = useState(Array(links.length).fill(false))

  const handleOpenChange = (index: number) => {
    const newOpenStates = [...openStates]
    newOpenStates[index] = !newOpenStates[index]
    setOpenStates(newOpenStates)
  }

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link: any, index: number) => {
          return (
            <Collapsible
              open={openStates[index]}
              onOpenChange={() => handleOpenChange(index)}
              key={index}
              className={cn(
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "h-full justify-start"
              )}
            >
              <div className="flex items-center justify-between space-x-4">
                <CollapsibleTrigger asChild>
                  <div
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "sm" }),
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                      "inline-flex w-full cursor-pointer justify-between px-2"
                    )}
                  >
                    <div className="inline-flex items-center space-x-3">
                      <link.icon className="size-4" />
                      <span className="items-center text-base">
                        {link.title}
                      </span>
                    </div>
                    <span>{link.label}</span>
                  </div>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                {link.sublinks.map((sublink: any, index: number) => {
                  return (
                    <div className="pl-6" key={index}>
                      <Link
                        to={`${link.path}/${index + 1}`}
                        className={cn(
                          buttonVariants({ variant: link.variant, size: "sm" }),
                          link.variant === "default" &&
                            "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                          "inline-flex w-full cursor-pointer justify-between px-2"
                        )}
                      >
                        <span>{sublink}</span>
                      </Link>
                    </div>
                  )
                })}
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </nav>
    </div>
  )
}
