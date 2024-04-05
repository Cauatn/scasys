import { Link } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

export default function Nav({ links, isCollapsed, path }: any) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 data-[collapsed=true]:py-2"
    >
      <nav>
        {links.map((link: any, index: number) =>
          isCollapsed ? (
            <div className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={`${link.path}/${index + 1}`}
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <Collapsible
              key={index}
              className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
            >
              <CollapsibleTrigger
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 size-4" />
                <span className="text-sm">{link.title}</span>
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" &&
                        "text-background dark:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                {link.sublinks.map((sublink: any, index: number) => {
                  return (
                    <div className="pl-6" key={index}>
                      <Link
                        to={`${link.path}/${index + 1}`}
                        className={cn(
                          buttonVariants({
                            variant: link.variant,
                            size: "sm",
                          }),
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
        )}
      </nav>
    </div>
  )
}
