import { Sidebar } from "@/components/sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "zustand";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { FormEvent, useEffect, useState } from "react";
import Experiment from "@/context/experiment";
import { DataTable } from "@/components/items/data-table";

export default function SevenPage() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar title="Telas inicial" />
      <form
        className="flex flex-col w-full max-w-6xl mx-auto h-full"
        onSubmit={handleSubmit}
      >
        Hello World!
      </form>
    </>
  );
}
