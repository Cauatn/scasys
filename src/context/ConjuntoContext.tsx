import { createContext, useContext, useEffect, useState } from "react"

export type ConjuntosContext = {
  Residuos: Array<String>
  addResiduo: (residuo: string) => void
}

export const ConjuntosContext = createContext<ConjuntosContext | null>(null)

export const ConjuntosProvider = ({ children }: any) => {
  const [Residuos, setResiduos] = useState<Array<String> | []>([])

  const addResiduo = (residuo: string) => {
    setResiduos((prev: any) => {
      return [...prev, residuo]
    })

    console.log(Residuos)
  }

  return (
    <ConjuntosContext.Provider
      value={{
        Residuos,
        addResiduo,
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
