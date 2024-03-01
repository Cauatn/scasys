import { createContext, useContext, useEffect, useState } from "react"

export type ExperimentoContext = {
  experimento: any
  setExperimentoMetaData: (nome: string, modoDeCalculo: string) => void
  setNewPhase: (nome: string) => void
  currentPhase: string
  setNewEtapa: (nome: string, rep: number, fase: string) => void
  currentEtapa: string
  setNewItem: (
    item: string,
    especificidade: string,
    formula: string,
    currentEtapa: string,
    currentPhase: string
  ) => void
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

  const [currentPhase, setCurrentPhase] = useState<string>("inicial")
  const [currentEtapa, setCurrentEtapa] = useState<string>("")

  const setExperimentoMetaData = (nome: string, modoDeCalculo: string) => {
    setExperimento((prev: any) => ({
      nome,
      modoDeCalculo,
      fases: prev.fases,
    }))
  }

  const setNewPhase = (nome: string) => {
    setExperimento((prev: any) => ({
      nome: prev.nome,
      modoDeCalculo: prev.modoDeCalculo,
      fases: {
        ...prev.fases,
        [nome]: {
          etapas: {},
        },
      },
    }))

    setCurrentPhase(nome)
  }

  const setNewEtapa = (nome: string, rep: number, fase: string) => {
    setExperimento((prev: any) => ({
      nome: prev.nome,
      modoDeCalculo: prev.modoDeCalculo,
      fases: {
        ...prev.fases,
        [fase]: {
          etapas: {
            ...prev.fases[fase].etapas,
            [nome]: {
              rep,
              items: {},
            },
          },
        },
      },
    }))

    setCurrentEtapa(nome)
  }

  const setNewItem = (
    item: string,
    especificidade: string,
    formula: string,
    currentEtapa: string,
    currentPhase: string
  ) => {
    setExperimento((prev: any) => ({
      nome: prev.nome,
      modoDeCalculo: prev.modoDeCalculo,
      fases: {
        ...prev.fases,
        [currentPhase]: {
          etapas: {
            ...prev.fases[currentPhase].etapas,
            [currentEtapa]: {
              rep: prev.fases[currentPhase].etapas[currentEtapa].rep,
              items: {
                ...prev.fases[currentPhase].etapas[currentEtapa].items,
                [item]: {
                  especificidade,
                  formula,
                },
              },
            },
          },
        },
      },
    }))
  }

  useEffect(
    () => console.log("experimento changed :", experimento),
    [experimento]
  )

  return (
    <ExperimentoContext.Provider
      value={{
        setExperimentoMetaData,
        setNewPhase,
        currentPhase,
        setNewEtapa,
        currentEtapa,
        setNewItem,
        experimento,
      }}
    >
      {children}
    </ExperimentoContext.Provider>
  )
}

export function useExpContext() {
  const contexto = useContext(ExperimentoContext)
  console.log(contexto)
  if (!contexto) {
    throw new Error("useExp Context precisa estar em seu respectivo provider")
  }

  return contexto
}
