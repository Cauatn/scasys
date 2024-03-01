import { NavBarT } from "@/components/nav"
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../components/ui/alert-dialog"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select"
import { Link } from "react-router-dom"

export default function AuthorsPage() {
  return (
    <div>
      <NavBarT
        items={[
          {
            title: "Autores",
            href: "/Authors",
          },
        ]}
        children={
          <AlertDialog>
            <AlertDialogTrigger className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm">
              Suporte
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-4 space-y-1">
                  <h3 className="text-xl font-bold">Mande uma mensagem!</h3>
                  <p className="text-sm font-normal">
                    Encontrou algum problema ou quer fazer uma sugestão? Envie
                    uma mensagem para nossa equipe!
                  </p>
                </AlertDialogTitle>
                <AlertDialogDescription className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="">Selecione o motivo do seu contato:</h3>
                    <div className="max-w-[300px]">
                      <Select required>
                        <SelectTrigger id="phase-select">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="problem">Problema</SelectItem>
                          <SelectItem value="suggestion">Sugestão</SelectItem>
                          <SelectItem value="other">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3>Digite a sua mensagem:</h3>
                    <textarea
                      className="h-20 max-h-40 min-h-20 w-full rounded-md border-2 p-1 outline-2 outline-[#272e3f]"
                      name=""
                      id="problem-description"
                      placeholder="Digite aqui sobre o que você pensando..."
                    ></textarea>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Fechar</AlertDialogCancel>
                <AlertDialogAction>Enviar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
      />
      <main className="flex-1">
        <div className="container relative">
          <section className="mx-auto flex h-screen max-h-[1400px] max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <h1 className="text-center text-3xl font-bold leading-tight md:text-6xl lg:leading-[1.1] ">
              Conheça nosso time
            </h1>
            <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
              As pessoas que fizeram e fazem esse projeto acontecer
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
              <Link
                className="inline-flex  h-9 items-center justify-center whitespace-nowrap rounded-md bg-green-500  px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                to="/procedure"
              >
                Comece a usar
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="https://github.com/cauatn/scasys"
              >
                <svg viewBox="0 0 438.549 438.549" className="mr-2 h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  >
                    {""}
                  </path>
                </svg>
                GitHub
              </a>
            </div>
          </section>
          <section className="space-y-8">
            <Students />
            <Professors />
          </section>
        </div>
      </main>
    </div>
  )
}

function Students() {
  return (
    <div className="space-y-20">
      <h1 className="text-center text-3xl font-bold leading-tight md:text-6xl lg:leading-[1.1]">
        Lorem ipsum dolor
      </h1>
      <section className="flex flex-row flex-wrap items-center gap-8 gap-y-14 ">
        <CardComponent
          name="Cauã Tavares"
          img="https://github.com/Cauatn.png"
          role="Progamador"
        />

        <CardComponent
          name="José Victor"
          img="https://github.com/jvictordev1.png"
          role="Progamador"
        />
        <CardComponent
          name="Arthur Alencar"
          img="https://github.com/DevAlencar.png"
          role="Progamador"
        />
        <CardComponent
          name="Vinicius Levi"
          img="https://github.com/viniciuslevi.png"
          role="Progamador"
        />
        <CardComponent
          name="Herbert Henrique"
          img="https://github.com/Hebert-code.png"
          role="Progamador"
        />
      </section>
    </div>
  )
}

function Professors() {
  return (
    <div className="space-y-20">
      <h1 className="text-center text-3xl font-bold leading-tight md:text-6xl lg:leading-[1.1]">
        Lorem ipsum dolor
      </h1>
      <section className="flex flex-row flex-wrap items-center gap-8 gap-y-14 ">
        <CardComponent
          name="Guilherme Finazzi "
          role="Professor"
          img="https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4769830Y8"
        />
        <CardComponent
          name="Ricardo Argeton"
          role="Professor"
          img="https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4778984D9"
        />
      </section>
    </div>
  )
}

function CardComponent({
  name,
  role,
  img,
}: {
  name: string
  role: string
  img: string
}) {
  return (
    <Card className="max-w-[400px]">
      <div className="-mt-10 flex justify-center">
        <img
          alt="Author"
          className="rounded-full border-4"
          height={120}
          src={img}
          style={{
            aspectRatio: "160/160",
            objectFit: "cover",
          }}
          width={120}
        />
      </div>
      <CardContent className="p-4 pb-0">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="space-y-0.5">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button size="sm">View Profile</Button>
      </CardFooter>
    </Card>
  )
}
