import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useConjContext } from "./ConjuntoContext"

export type ExperimentoContext = {
  listItems: any
  experimento: any
  setExperimentoMetaData: (nome: string, modoDeCalculo: string) => void
  setNewPhase: (nome: string) => void
  currentPhase: string
  setNewEtapa: (nome: string, num_of_reps: number, fase: string) => void
  currentEtapa: string
  setNewItem: (
    item: string,
    especificidade: string,
    formula: string,
    currentEtapa: string,
    currentPhase: string
  ) => void
  setQuantity: (item: string, obj: any) => void
  selectedRows: any[]
  setSelectedRows: Dispatch<SetStateAction<any[]>>
  currentItem: string
}

export const ExperimentoContext = createContext<ExperimentoContext | null>(null)

export const ExperimentoProvider = ({ children }: any) => {
  const { residuos, addResiduo, compostos, addCompost, epcs, addEpc } =
    useConjContext()

  const [experimento, setExperimento] = useState<any | undefined>({
    nome: null,
    modoDeCalculo: null,
    fases: {},
  })

  const [currentPhase, setCurrentPhase] = useState<string>("inicial")
  const [currentEtapa, setCurrentEtapa] = useState<string>("")
  const [currentItem, setCurrentItem] = useState<string>("")
  const [listItems, setListItems] = useState<any[]>([]) //lista de itens da tabela [residuos, compostos, epcs

  useEffect(() => {
    localStorage.setItem("experimento", JSON.stringify(experimento))
  }, [experimento])

  //variavel que indica os valores da tabela selecionados
  const [selectedRows, setSelectedRows] = useState<Array<any>>([])

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

  const setNewEtapa = (nome: string, num_of_reps: number, fase: string) => {
    setExperimento((prev: any) => ({
      nome: prev.nome,
      modoDeCalculo: prev.modoDeCalculo,
      fases: {
        ...prev.fases,
        [fase]: {
          etapas: {
            ...prev.fases[fase].etapas,
            [nome]: {
              num_of_reps,
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
              num_of_reps:
                prev.fases[currentPhase].etapas[currentEtapa].num_of_reps,
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

    setCurrentItem(item)
    setListItems([
      ...listItems,
      {
        id: residuos.length + 1,
        items: item,

        especificidade: especificidade,
        formula: formula,
        currentEtapa: currentEtapa,
        currentPhase: currentPhase,
      },
    ])

    if (especificidade === "residue") {
      addResiduo({
        id: residuos.length + 1,
        amount: 0,
        status: "not-selected",
        residuo: item,
        currentEtapa: currentEtapa,
        currentPhase: currentPhase,
      })
    }

    if (especificidade === "compost") {
      addCompost({
        id: compostos.length + 1,
        status: "not-selected",
        composto: item,
        currentEtapa: currentEtapa,
        currentPhase: currentPhase,
      })
    }

    if (especificidade === "electric-power-consumption") {
      addEpc({
        id: epcs.length + 1,
        status: "not-selected",
        epc: item,
        currentEtapa: currentEtapa,
        currentPhase: currentPhase,
      })
    }
  }

  const setQuantity = (item: string, obj: any) => {
    setExperimento((prev: any) => ({
      nome: prev.nome,
      modoDeCalculo: prev.modoDeCalculo,
      fases: {
        ...prev.fases,
        [currentPhase]: {
          etapas: {
            ...prev.fases[currentPhase].etapas,
            [currentEtapa]: {
              num_of_reps:
                prev.fases[currentPhase].etapas[currentEtapa].num_of_reps,
              items: {
                ...prev.fases[currentPhase].etapas[currentEtapa].items,
                [item]: {
                  ...prev.fases[currentPhase].etapas[currentEtapa].items[item],
                  ...obj,
                },
              },
            },
          },
        },
      },
    }))
  }

  return (
    <ExperimentoContext.Provider
      value={{
        setExperimentoMetaData,
        setNewPhase,
        currentPhase,
        setNewEtapa,
        currentEtapa,
        setNewItem,
        currentItem,
        experimento,
        setSelectedRows,
        setQuantity,
        selectedRows,
        listItems,
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
