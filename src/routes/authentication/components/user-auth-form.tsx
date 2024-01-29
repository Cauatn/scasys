import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
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
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
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
						/>
						<Label className="sr-only" htmlFor="Instituition">
							Instituição
						</Label>
						<Input
							id="Instituition"
							placeholder="UNIVASF"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
						/>
						<Label className="sr-only" htmlFor="password">
							Senha
						</Label>
						<Input
							id="password"
							placeholder="Senha"
							type="password"
							autoCapitalize="none"
							autoComplete="password"
							autoCorrect="off"
							disabled={isLoading}
						/>
						<Label className="sr-only" htmlFor="confPass">
							Confirm Password
						</Label>
						<Input
							id="confPass"
							placeholder="Confirme a senha"
							type="password"
							autoCapitalize="none"
							autoComplete="password"
							autoCorrect="off"
							disabled={isLoading}
						/>
					</div>
					<Button disabled={isLoading}>
						{isLoading && (
							//<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							<div>{""}</div>
						)}
						Registrar
					</Button>
				</div>
			</form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Ou continue com
					</span>
				</div>
			</div>
			<Button variant="outline" type="button" disabled={isLoading}>
				{isLoading ? (
					//<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
					<div>{""}</div>
				) : (
					//<Icons.gitHub className="mr-2 h-4 w-4" />
					<div>{""}</div>
				)}{" "}
				Google
			</Button>
		</div>
	);
}

export { UserAuthForm };
