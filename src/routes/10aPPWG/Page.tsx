import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function TenaPPWG() {
  return (
    <div className="bg-white p-6 max-w-4xl m-auto space-y-8">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Problematização de Prevenção de Geração de Resíduos
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Insira as informações nos campos abaixo para calcular a prevenção de
            geração de resíduos.
          </p>
        </div>
        <form className="mt-5 sm:flex sm:items-center lg:flex lg:flex-col lg:justify-between lg:space-y-4">
          <div className="lg:inline-flex lg:space-x-4 lg:w-full lg:justify-between">
            <div className="inline-flex">
              <div className="sm:max-w-xs lg:inline-flex items-center lg:space-x-4">
                <Label className="w-[39px]">MMR</Label>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="secondary">?</Button>
                </div>
                <Input
                  id="mrr"
                  placeholder="MMR"
                  className="max-w-16 min-w-16"
                />
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
            <div className="inline-flex">
              <div className="sm:max-w-xs lg:inline-flex items-center lg:space-x-4 lg:mr-12">
                <Label className="w-12">MTAD</Label>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="secondary">?</Button>
                </div>
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
          </div>

          <div className="lg:inline-flex lg:space-x-4 lg:w-full lg:justify-between">
            <div className="inline-flex">
              <div className="sm:max-w-xs lg:inline-flex items-center lg:space-x-4">
                <Label className="w-12">MTDR</Label>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="secondary">?</Button>
                </div>
                <Input
                  id="mrr"
                  placeholder="MMR"
                  className="max-w-16 min-w-16"
                />
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
            <div className="inline-flex">
              <div className="sm:max-w-xs lg:inline-flex items-center lg:space-x-4 lg:mr-6">
                <Label className="w-12">TD</Label>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="secondary">?</Button>
                </div>
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
          </div>
          <div className="lg:inline-flex w-full lg:space-x-4 lg:items-center">
            <Label className="w-2">F</Label>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button variant="secondary">?</Button>
            </div>
            <Input
              className="max-w-64"
              placeholder="inserir quantidade ou..."
            />
          </div>
        </form>
        <div className="mt-6">
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
