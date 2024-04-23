import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useConjContext } from "./ConjuntoContext"
import { set } from "react-hook-form"

export type ExperimentoContext = {
  listItems: any
  setNewPhase: (nome: string) => void
  currentPhase: string
  setNewEtapa: (nome: string, num_of_reps: number, fase: string) => void
  currentEtapa: string
  setNewItem: (
    item: string,
    especificidade: string,
    formula: string,
    isRecyclable: boolean,
    isBioDeposited: boolean,
    isDegradable: Array<any> | undefined
  ) => void
  undoLastAction: () => void
  setQuantity: (obj: any) => void
  selectedRows: any[]
  setSelectedRows: Dispatch<SetStateAction<any[]>>
  currentItem: string
  inventoryStage: any
  setInventoryStage: Dispatch<SetStateAction<any>>
  setListItems: Dispatch<SetStateAction<any[]>>
  setMrrItems: (etapa: string, phase: string, itemName: string) => void
}

export const ExperimentoContext = createContext<ExperimentoContext | null>(null)

export const ExperimentoProvider = ({ children }: any) => {
  const {} = useConjContext()

  const [inventoryStage, setInventoryStage] = useState<any | undefined>([])

  const [currentPhase, setCurrentPhase] = useState<string>("inicial")
  const [currentEtapa, setCurrentEtapa] = useState<string>("")
  const [currentItem, setCurrentItem] = useState<string>("")
  const [listItems, setListItems] = useState<any[]>([]) //lista de itens da tabela [residuos, compostos, epcs

  const [isB, setIsB] = useState<boolean>(false)

  //lista que armazena os estados anteriores da tabela
  const [previousStates, setPreviousStates] = useState<any[]>([])

  useEffect(() => {
    console.log("inventario mudou: ", inventoryStage)
    if (isB) {
      setInventoryStage(previousStates[previousStates.length - 1])
      setIsB(false)
    } else {
      setPreviousStates((prev) => [
        ...prev,
        JSON.parse(JSON.stringify(inventoryStage)),
      ])
    }
  }, [inventoryStage])

  useEffect(() => {
    console.log("previousStates mudou: ", previousStates)
  }, [previousStates])

  //variavel que indica os valores da tabela selecionados
  const [selectedRows, setSelectedRows] = useState<Array<any>>([])

  const setNewPhase = (nome: string) => {
    setCurrentPhase(nome)

    setInventoryStage((prev: any) => {
      return [
        ...prev,
        {
          name: nome,
          etapa: [],
        },
      ]
    })
  }

  const setNewEtapa = (nome: string, num_of_reps: number) => {
    setCurrentEtapa(nome)

    setInventoryStage((prev: any) => {
      const index = prev.findIndex((item: any) => item.name === currentPhase)
      const newEtapa = {
        name: nome,
        num_of_reps: num_of_reps,
        elements: [],
      }

      prev[index].etapa.push(newEtapa)
      return [...prev]
    })
  }

  const setNewItem = (
    item: string,
    especificidade: string,
    formula: string,
    isRecyclable: boolean,
    isBioDeposited: boolean,
    isDegradable: Array<any> | undefined
  ) => {
    setCurrentItem(item)

    setInventoryStage((prev: any) => {
      const index = prev.findIndex((item: any) => item.name === currentPhase)
      const etapaIndex = prev[index].etapa.findIndex(
        (item: any) => item.name === currentEtapa
      )

      const newItem = {
        item: item,
        especifity: especificidade,
        chem_form: formula,
        isRecyclable: isRecyclable,
        isBioDeposited: isBioDeposited,
        isDegradable: isDegradable,
      }

      prev[index].etapa[etapaIndex].elements.push(newItem)
      return [...prev]
    })

    setListItems([
      ...listItems,
      {
        id: listItems.length + 1,
        items: item,
        especificidade: especificidade,
        formula: formula,
        currentEtapa: currentEtapa,
        currentPhase: currentPhase,
        properties: {
          quantity: [],
          total: 0,
        },
      },
    ])
  }

  const setQuantity = (obj: any) => {
    setListItems((prev: any) => {
      const index = prev.findIndex(
        (item: any) =>
          item.items === currentItem && item.currentEtapa === currentEtapa
      )

      //somando valores de quantidade
      let sum = 0
      obj.quantitys.forEach((element: any) => {
        sum += element.value
      })

      prev[index].properties.quantity = obj.quantitys
      prev[index].properties.total = sum.toFixed(3)
      return [...prev]
    })
  }

  const setMrrItems = (etapa: string, phase: string, itemName: string) => {
    setInventoryStage((prev: any) => {
      const index = prev.findIndex((item: any) => item.name === phase)
      const etapaIndex = prev[index].etapa.findIndex(
        (item: any) => item.name === etapa
      )
      const elementIndex = prev[index].etapa[etapaIndex].elements.findIndex(
        (element: any) => element.item === itemName
      )

      //mudando valor de isRecyclable
      prev[index].etapa[etapaIndex].elements[elementIndex].isRecyclable = true
      return [...prev]
    })
  }

  const undoLastAction = () => {
    setIsB(true)

    if (previousStates.length > 1) {
      setInventoryStage(previousStates[previousStates.length - 2])

      setPreviousStates((prev) => {
        prev.pop()
        return [...prev]
      })
    }
  }

  return (
    <ExperimentoContext.Provider
      value={{
        setNewPhase,
        currentPhase,
        setNewEtapa,
        currentEtapa,
        setNewItem,
        currentItem,
        setSelectedRows,
        setQuantity,
        selectedRows,
        listItems,
        inventoryStage,
        setListItems,
        setMrrItems,
        undoLastAction,
        setInventoryStage,
      }}
    >
      {children}
    </ExperimentoContext.Provider>
  )
}

export function useExpContext() {
  const contexto = useContext(ExperimentoContext)

  if (!contexto) {
    throw new Error("useExp Context precisa estar em seu respectivo provider")
  }

  return contexto
}
