import { createContext, useContext, useEffect, useState } from "react"

export type ConjuntosContext = {
  residuos: any
  setResiduos: (residuos: any) => void
}

export const ConjuntosContext = createContext<ConjuntosContext | null>(null)

export const ConjuntosProvider = ({ children }: any) => {
  const [residuos, setResiduos] = useState<Array<any>>([])

  useEffect(() => {
    console.log(residuos)
  }, [residuos])

  return (
    <ConjuntosContext.Provider
      value={{
        setResiduos,
        residuos,
      }}
    >
      {children}
    </ConjuntosContext.Provider>
  )
}

export function useConjContext() {
  const contexto = useContext(ConjuntosContext)

  if (!contexto) {
    throw new Error("O contexto precisa estar em seu respectivo provider")
  }

  return contexto
}
