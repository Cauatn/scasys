import { Link } from "wouter";
import { MicroscopeIcon, Settings } from "lucide-react";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/sidebar/menu";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { SidebarToggle } from "@/components/sidebar/Sidebar-toggle";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 justify-between",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1 flex justify-start",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
        >
          <Link
            href="/dashboard"
            className="flex items-center justify-between gap-2 w-full"
          >
            <MicroscopeIcon className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-base whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 inline-flex w-full space-x-1",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              <p className="text-emerald-600 text-xl">Scasys</p>{" "}
              <p className="text-xl">química</p>
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
