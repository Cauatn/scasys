import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface SignInUserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

// interface to represent the user data in the form
interface FormData {
  password: string;
  name: string;
}

function SignInUserAuthForm({ className, ...props }: SignInUserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setCookie] = useCookies(["user"]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    password: "",
    name: "",
  });

  // function to update the balue of the data based on some event
  const handleFormEdit = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: keyof FormData
  ) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const url = "http://localhost:8000/auth/";
    const data = {
      username: formData.name,
      password: formData.password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setCookie(
        "user",
        JSON.stringify({
          access: result.access,
          refresh: result.refresh,
        }),
        { path: "/" }
      );

      console.log("Success:", result);

      navigate("/app/3a");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="NomeCompleto">
              Nome de usuário
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
                handleFormEdit(e, "name");
              }}
            />
            {/* <Label className="sr-only" htmlFor="email">
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
                handleFormEdit(e, "email");
              }}
            /> */}
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
                handleFormEdit(e, "password");
              }}
            />
          </div>
          <Button disabled={isLoading}>
            {/*isLoading && (
							//<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							<div>{""}</div>
						)*/}
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}

export { SignInUserAuthForm };
