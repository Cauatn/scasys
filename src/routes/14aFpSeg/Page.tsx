import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";

function FourteenFpSeg() {
  return (
    <div className="bg-white p-6 max-w-4xl m-auto h-screen ">
      <div className="grid grid-cols-2 gap-8 mt-6">
        <div>
          <div className="mb-6 space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">Segurança</h2>
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-factor"
              >
                Fator: risco de gases confinados fp
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="chemical-composition"
            >
              Composto químico:
            </label>
            <Select>
              <SelectTrigger id="chemical-composition">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="quantidade"
            >
              Quantidade
            </label>
            <div className="inline-flex space-x-4">
              <Input id="quantidade" placeholder="Quantidade" />
              <Select>
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Kg</SelectItem>
                  <SelectItem value="option2">g</SelectItem>
                  <SelectItem value="option3">L</SelectItem>
                  <SelectItem value="option4">mol</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="explosion-limit"
            >
              Pressão do gás
            </label>
            <div className="inline-flex items-center space-x-4">
              <Input id="explosion-limit" placeholder="Limite" />
              <Select>
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Kg</SelectItem>
                  <SelectItem value="option2">g</SelectItem>
                  <SelectItem value="option3">L</SelectItem>
                  <SelectItem value="option4">mol</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="pressao"
            >
              Pressão do ar
            </label>
            <div className="inline-flex space-x-4">
              <Input id="pressao" placeholder="Pressão do ar" />
              <Select>
                <SelectTrigger id="residue-set">
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Kg</SelectItem>
                  <SelectItem value="option2">g</SelectItem>
                  <SelectItem value="option3">L</SelectItem>
                  <SelectItem value="option4">mol</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="state-gas"
              >
                Estado do gás
              </label>
              <Select>
                <SelectTrigger id="state-gas">
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Comprimido</SelectItem>
                  <SelectItem value="option2">rarefeito</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="bibliographic-source-2"
              >
                Temperatura do ambiente
              </label>
              <Input
                id="bibliographic-source-2"
                placeholder="Temperatura do ambiente"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="bibliographic-source-3"
              >
                Temperatura do composto
              </label>
              <Input
                id="bibliographic-source-3"
                placeholder="Temperatuda do composto"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to={"/ps/3"} className="flex justify-end">
        <Button className="bg-[#4CAF50] text-white">Proxima</Button>
      </Link>
    </div>
  );
}

export { FourteenFpSeg };
