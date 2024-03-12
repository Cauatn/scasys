import { Item } from "@/components/conjuntos/columns"
import { createContext, useContext, useEffect, useState } from "react"

export type ConjuntosContext = {
  residuos: Array<Item>
  addResiduo: (residuo: any) => void
  compostos: Array<Item>
  addCompost: (composto: any) => void
  epcs: Array<Item>
  addEpc: (epc: any) => void
}

export const ConjuntosContext = createContext<ConjuntosContext | null>(null)

export const ConjuntosProvider = ({ children }: any) => {
  const [residuos, setResiduos] = useState<Array<Item> | []>([])
  const [compostos, setCompostos] = useState<Array<Item> | []>([])
  const [epcs, setEpcs] = useState<Array<Item> | []>([])

  //adiciona os residuos selecionados
  const addResiduo = (residuo: any) => {
    //caso o residuo já esteja na lista, remove
    const index = residuos.findIndex((r) => r.id === residuo.id)
    if (index !== -1) {
      setResiduos((prev: any) => {
        prev.splice(index, 1)
        return [...prev]
      })
      return
    }

    setResiduos((prev: any) => {
      return [...prev, residuo]
    })
  }

  const addCompost = (composto: any) => {
    //caso o residuo já esteja na lista, remove
    const index = compostos.findIndex((r) => r.id === composto.id)
    if (index !== -1) {
      setCompostos((prev: any) => {
        prev.splice(index, 1)
        return [...prev]
      })
      return
    }

    setCompostos((prev: any) => {
      return [...prev, composto]
    })
  }

  const addEpc = (epc: any) => {
    //caso o residuo já esteja na lista, remove
    const index = epcs.findIndex((e) => e.id === e.id)
    if (index !== -1) {
      setEpcs((prev: any) => {
        prev.splice(index, 1)
        return [...prev]
      })
      return
    }

    setEpcs((prev: any) => {
      return [...prev, epc]
    })
  }

  useEffect(() => console.log("lista de residuos: ", residuos), [residuos])

  return (
    <ConjuntosContext.Provider
      value={{
        residuos,
        addResiduo,
        compostos,
        addCompost,
        epcs,
        addEpc,
      }}
    >
      {children}
    </ConjuntosContext.Provider>
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
