import { Link } from "react-router-dom";
import { UserAuthForm } from "./components/user-auth-form";

function AuthenticationPage() {
	return (
		<div className="w-screen h-screen flex flex-row">
			<div className="container relative hidden h-screen items-center justify-center md:grid lg:w-2/3">
				<div className="lg:p-8">
					<div className="mx-auto flex flex-col justify-center space-y-6 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">
								Crie uma conta
							</h1>
							<p className="text-sm text-muted-foreground">
								Preencha os dados para criar um usuario
							</p>
						</div>
						<UserAuthForm />
						<p className="px-8 text-center text-sm text-muted-foreground">
							Ao clicar em continuar você aceita nossos,{" "}
							<Link
								to={""}
								className="underline underline-offset-4 hover:text-primary"
							>
								Termos de Serviço
							</Link>{" "}
							and{" "}
							<Link
								to={""}
								className="underline underline-offset-4 hover:text-primary"
							>
								Política de privacidade
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
			<div className="relative hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r lg:w-1/3 h-full">
				<div className="absolute inset-0 bg-green-500 " />
				<div className="relative z-20 flex items-center text-lg font-medium ">
					<svg
						xlinkTitle="Scasys Logo"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-2 h-6 w-6"
					>
						<title>Scasys Logo</title>
						<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
					</svg>
					Scasys
				</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&ldquo;Aqui vai ter um texto muito chique falando do objetivo ou
							motivação da aplicação.&rdquo;
						</p>
						<footer className="text-sm">Scays Team</footer>
					</blockquote>
				</div>
			</div>
		</div>
	);
}

export { AuthenticationPage };
