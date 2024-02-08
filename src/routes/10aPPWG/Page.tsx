import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function TenaPPWG() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 w-1/2 space-y-4">
        <div>
          <h1 className="text-2xl font-bold w-full">
            Problematização de Prevenção de Geração de Resíduos
          </h1>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Insira as informações nos campos abaixo para calcular a prevenção
              de geração de resíduos.
            </p>
          </div>
        </div>
        <form className="flex flex-col items-center space-y-4">
          <div className="flex flex-1 flex-wrap gap-4 w-full justify-center">
            <div className="flex items-center">
              <Label className="w-16">MMR</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex flex-wrap w-2/3 justify-center gap-4">
              <Input id="mrr" placeholder="MMR" className="max-w-16 min-w-16" />
              <Select>
                <SelectTrigger
                  id="mrr-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  id="mrr-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap gap-4 w-full justify-center">
            <div className="flex items-center">
              <Label className="w-16">MTAD</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex flex-wrap w-2/3 justify-center gap-4">
              <Input
                id="mrr"
                placeholder="MTAD"
                className="max-w-16 min-w-16"
              />
              <Select>
                <SelectTrigger
                  id="mtad-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  id="mrr-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap gap-4 w-full justify-center">
            <div className="flex items-center">
              <Label className="w-16">MTDR</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex flex-wrap w-2/3 justify-center gap-4">
              <Input id="mrr" placeholder="MMR" className="max-w-16 min-w-16" />
              <Select>
                <SelectTrigger
                  id="mrr-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  id="mrr-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap gap-4 w-full justify-center">
            <div className="flex items-center">
              <Label className="w-16">TD</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex flex-wrap w-2/3 justify-center gap-4">
              <Input
                id="mrr"
                placeholder="MTAD"
                className="max-w-16 min-w-16"
              />
              <Select>
                <SelectTrigger
                  id="mtad-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  id="mrr-options"
                  className="mt-3 sm:mt-0 max-w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-center gap-4">
            <div className="flex items-center">
              <Label className="w-16">F</Label>
              <div>
                <Button variant="secondary">?</Button>
              </div>
            </div>
            <div className="flex flex-wrap w-2/3 justify-center gap-4">
              <Input
                className="max-w-72"
                placeholder="Inserir quantidade ou..."
              />
            </div>
          </div>
          <div className="mt-6 w-full">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="fonte-bibliografica"
            >
              Fonte bibliográfica
            </label>
            <div className="mt-1">
              <Input
                id="fonte-bibliografica"
                placeholder="Insira a fonte bibliográfica"
              />
            </div>
          </div>
        </form>
        <div className="mt-6 flex justify-end">
          <div className="flex space-x-2">
            <Button variant="secondary">Tabela</Button>
            <Link to={"/etc/1"}>
              <Button className="bg-green-500">Próximo</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
