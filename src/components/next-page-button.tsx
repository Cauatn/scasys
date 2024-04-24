import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useExpContext } from "@/context/ExperimentoContext"

export default function NextPageButton() {
  const navigate = useNavigate()

  return (
    <div className="mb-6 mt-4 flex flex-col items-center space-y-2 xl:mr-8 xl:items-end">
      <Button className="w-full bg-green-500 xl:w-44" type="submit">
        Próximo
      </Button>
      <Button
        className="w-full bg-slate-950 xl:hidden"
        type="button"
        onClick={() => {
          navigate(-1)
        }}
      >
        Retornar
      </Button>
    </div>
  )
}
