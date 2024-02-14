import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

export default function Navbar({ toggleReturnButton = true }) {
  const navigator = useNavigate()
  return (
    <nav>
      <div className="flex-start mx-auto flex h-16 max-w-6xl items-center px-4 pt-3">
        <div className="inline-flex h-full w-full items-start space-x-4">
          {toggleReturnButton && (
            <div className="mb-6 flex items-center space-x-4">
              <Button
                onClick={() => navigator(-1)}
                className="flex items-center space-x-2"
                variant="ghost"
              >
                <ArrowLeftIcon className="size-5" />
                <span>Retornar</span>
              </Button>
            </div>
          )}
          <h1 className="ml-2 h-fit text-2xl font-bold">SCASYS</h1>
        </div>
      </div>
    </nav>
  )
}
