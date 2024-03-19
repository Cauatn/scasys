import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Radio from "./radio-group"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const SupportSchema = z.object({
  contactReason: z.string(),
  page: z.string().optional().nullable(),
  email: z.string(),
  message: z.string(),
})
type SupportSchema = z.infer<typeof SupportSchema>

export default function Support() {
  const { handleSubmit, setValue } = useForm({
    resolver: zodResolver(SupportSchema),
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [contactReason, setContactReason] = useState("")
  const [isProblemOnCurrentPage, setIsProblemOnCurrentPage] = useState(true)
  const [messageState, setMessageState] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    if (isDialogOpen) {
      setContactReason("")
      setMessageState("")
      setEmailValue("")
      setIsProblemOnCurrentPage(true)
    }
  }, [isDialogOpen])
  useEffect(() => {
    if (isProblemOnCurrentPage && contactReason === "problem") {
      setValue("page", window.location.href)
    } else {
      setValue("page", null)
    }
  }, [isProblemOnCurrentPage, contactReason])

  const handleContactReasonChange = (value: string) => {
    if (value === "problem") {
      setContactReason("problem")
    } else {
      setContactReason("")
    }
    setValue("contactReason", value)
  }
  const handleFormSubmit = (data: any) => {
    console.log(data)
    setMessageState("")
    setEmailValue("")
    setIsDialogOpen(!isDialogOpen)
    toast({
      title: "Mensagem enviada!",
      description: "Sua mensagem foi enviada com sucesso!",
      duration: 3000,
      style: { backgroundColor: "#030816", color: "white" },
    })
  }
  const handleMessageChange = (value: string) => {
    setMessageState(value)
    setValue("message", value)
  }
  const handleEmailChange = (value: string) => {
    setEmailValue(value)
    setValue("email", value)
  }

  const checkboxes = [
    {
      label: "S",
      value: "Sim",
      id: "sim",
    },
    {
      label: "N",
      value: "Não",
      id: "nao",
    },
  ]
  return (
    <AlertDialog
      open={isDialogOpen}
      onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
    >
      <AlertDialogTrigger
        className={cn(
          "flex items-center text-lg font-bold sm:text-sm",
          window.location.pathname == "/" ? "text-white" : "text-slate-900"
        )}
      >
        Suporte
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-4 space-y-1">
              <h3 className="text-xl font-bold">Mande uma mensagem!</h3>
              <p className="text-sm font-normal">
                Encontrou algum problema ou quer fazer uma sugestão? Envie uma
                mensagem para nossa equipe!
              </p>
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <div className="space-y-2">
                <Label className="">Selecione o motivo do seu contato:</Label>
                <div className="max-w-[300px]">
                  <Select
                    required
                    onValueChange={(value) => handleContactReasonChange(value)}
                  >
                    <SelectTrigger id="reason-select">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="problem">Problema</SelectItem>
                      <SelectItem value="suggestion">Sugestão</SelectItem>
                      <SelectItem value="others">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {contactReason === "problem" && (
                <Radio
                  label="O problema está localizado na página atual?"
                  defaultValue="Sim"
                  checkboxes={checkboxes}
                  action={() =>
                    setIsProblemOnCurrentPage(!isProblemOnCurrentPage)
                  }
                />
              )}
              {isProblemOnCurrentPage === false &&
                contactReason === "problem" && (
                  <div className="space-y-2">
                    <Label>Em qual página você encontrou o problema?</Label>
                    <div className="max-w-[300px]">
                      <Select
                        required
                        onValueChange={(value) => setValue("page", value)}
                      >
                        <SelectTrigger id="page-select">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="pag-1">Pag 1</SelectItem>
                          <SelectItem value="pag-2">pag 2</SelectItem>
                          <SelectItem value="pag-3">pag 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              <div>
                <Label>Email:</Label>
                <Input
                  required
                  placeholder="Email"
                  onChange={(e) => handleEmailChange(e.target.value)}
                  type="email"
                  value={emailValue}
                ></Input>
              </div>
              <div className="space-y-2">
                <Label>Digite a sua mensagem:</Label>
                <textarea
                  required
                  className="h-20 max-h-40 min-h-20 w-full rounded-md border-2 p-1 outline-2 outline-[#272e3f]"
                  id="problem-description"
                  placeholder="Digite aqui sobre o que você pensando..."
                  value={messageState}
                  onChange={(e) => handleMessageChange(e.target.value)}
                ></textarea>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Fechar</AlertDialogCancel>
            <button
              type="submit"
              className="rounded-sm bg-black/90 px-3 text-sm font-medium text-white"
            >
              Enviar
            </button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
