import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface FormData {
  email: string
  password: string
  confirmPassword: string
  name: string
  institution: string
}

function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    institution: "",
  })

  const handleFormEdit = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: keyof FormData
  ) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post(
        "http://localhost:3333/user/register",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      console.log(response)

      localStorage.setItem("user", JSON.stringify(response.data))

      // Aqui você pode fornecer feedback ao usuário sobre o sucesso da operação, se necessário
    } catch (error) {
      console.error(error)

      // Aqui você pode fornecer feedback ao usuário sobre o erro que ocorreu, se necessário
    } finally {
      setIsLoading(false)
      navigate("/procedure")
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="NomeCompleto">
              Nome Completo
            </Label>
            <Input
              id="NomeCompleto"
              placeholder="Nome completo"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={formData.name}
              onChange={(e) => {
                handleFormEdit(e, "name")
              }}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="nome@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={formData.email}
              onChange={(e) => {
                handleFormEdit(e, "email")
              }}
            />
            <Label className="sr-only" htmlFor="Instituition">
              Instituição
            </Label>
            <Input
              id="Institution"
              placeholder="UNIVASF"
              type="institution"
              autoCapitalize="none"
              autoComplete="institution"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={formData.institution}
              onChange={(e) => {
                handleFormEdit(e, "institution")
              }}
            />
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={formData.password}
              onChange={(e) => {
                handleFormEdit(e, "password")
              }}
            />
            <Label className="sr-only" htmlFor="confPass">
              Confirm Password
            </Label>
            <Input
              id="confPass"
              placeholder="Confirme a senha"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={formData.confirmPassword}
              onChange={(e) => {
                handleFormEdit(e, "confirmPassword")
              }}
            />
          </div>
          <Button disabled={isLoading}>
            {/*isLoading && (
							//<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							<div>{""}</div>
						)*/}
            Registrar
          </Button>
        </div>
      </form>
    </div>
  )
}

export { UserAuthForm }
