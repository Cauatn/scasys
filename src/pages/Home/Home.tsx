import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="inline-flex items-center justify-between w-full py-6">
        <span>Logo</span>
        <ul className="inline-flex items-center space-x-4">
          <li>
            <a href="#">Suporte</a>
          </li>
          <li>
            <a href="#">Documentação</a>
          </li>
          <li>
            <Button className="bg-emerald-600">Comece a utilizar</Button>
          </li>
        </ul>
      </header>
      <main className="inline-flex justify-between w-full items-center mt-10">
        <div className="max-w-[420px] space-y-8">
          <div className="inline-flex items-center py-2 px-2 bg-gray-100 h-10 w-fit space-x-2 rounded-lg">
            <p className="text-gray-custom ">
              Tenha os beneficios de utilizar nosso Software aqui
            </p>
            <ArrowRightIcon className="text-gray-custom" />
          </div>
          <div className="flex flex-col space-y-8">
            <span className="text-4xl inline-block items-center text-justify">
              <B>Software</B> <p>com confiabilidade.</p>
            </span>
            <span className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .
            </span>
          </div>
          <div className="flex justify-between">
            <Button className="max-w-[200px] w-full" variant="outline">
              Nossa equipe
            </Button>
            <Button className="bg-emerald-600 max-w-[200px] w-full">
              Comece a utilizar
            </Button>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder Image"
          className="h-[400px] w-[600px]"
        />
      </main>
    </div>
  );
}

interface BProps {
  children: React.ReactNode;
}

function B({ children }: BProps) {
  return <p className="text-emerald-600 font-semibold">{children}</p>;
}
