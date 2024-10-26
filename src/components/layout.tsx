import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "zustand";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar/Sidebar";
import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";
import { CookiesProvider } from "react-cookie";

function Layout() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <CookiesProvider>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh)] bg-gray-100 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 max-w-screen flex flex-col overflow-x-hidden justify-start",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Toaster />
        <Navbar title="Telas inicial" />
        <Outlet />
      </main>
    </CookiesProvider>
  );
}

export default Layout;
