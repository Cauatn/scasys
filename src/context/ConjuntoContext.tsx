import { Item } from "@/components/data-table/columns"
import { createContext, useContext, useEffect, useState } from "react"

export type ConjuntosContext = {}

export const ConjuntosContext = createContext<ConjuntosContext | null>(null)

export const ConjuntosProvider = ({ children }: any) => {
  const [residuos, setResiduos] = useState<Array<Item> | []>([])
  const [compostos, setCompostos] = useState<Array<Item> | []>([])
  const [epcs, setEpcs] = useState<Array<Item> | []>([])

  useEffect(() => console.log("lista de residuos: ", residuos), [residuos])

  return (
    <ConjuntosContext.Provider value={{}}>{children}</ConjuntosContext.Provider>
  )
}

export function useConjContext() {
  const contexto = useContext(ConjuntosContext)

  console.log(contexto)

  if (!contexto) {
    throw new Error("O contexto precisa estar em seu respectivo provider")
  }

  return contexto
}
