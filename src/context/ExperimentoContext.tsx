import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

export type ExperimentoContext = {
  setPhaseName: Dispatch<SetStateAction<any>>
  setExperimentoMetaData: (nome: string, modoDeCalculo: string) => void
}

export const ExperimentoContext = createContext<ExperimentoContext | null>(null)

/**
 * @param {
 *          "experimeto": {
 *            "nome": string,
 *            "modoDeCalculo": "string",
 *          "fases" : {
 *           "inicial/int/final" : {
 *            "etapas": {
 *             "nomeEtapa": {
 *              "items": {
 *               "..." : {
 *                "especificidade": string,
 *               "item": string,
 *                 "formula": string
 *               }
 *              }
 *           }
 *         }
 *       }
 *     }
 *   }
 *  }
 **/

export const ExperimentoProvider = ({ children }: any) => {
  const [experimento, setExperimento] = useState<any | undefined>({
    nome: null,
    modoDeCalculo: null,
    fases: {},
  })

  const setExperimentoMetaData = (nome: string, modoDeCalculo: string) => {
    setExperimento((prev: any) => ({
      nome,
      modoDeCalculo,
      fases: prev.fases,
    }))
  }

  const [phase, setPhase] = useState<string | null>(null)

  useEffect(() => console.log("experimento add", experimento), [experimento])

  const setPhaseName = (nome: string) => {
    setPhase(nome)
  }

  return (
    <ExperimentoContext.Provider
      value={{ setExperimentoMetaData, setPhaseName }}
    >
      {children}
    </ExperimentoContext.Provider>
  )
}

export function useExpContext() {
  const contexto = useContext(ExperimentoContext)
  console.log(contexto)
  if (!contexto) {
    throw new Error("useExp Context precisa estar em seu respectivo provieder")
  }

  return contexto
}
