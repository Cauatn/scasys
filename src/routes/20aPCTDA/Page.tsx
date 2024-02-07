import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, CircleIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TwentyFivePCTDA() {
  return (
    <div className="bg-white p-6 max-w-4xl m-auto h-screen ">
      <div className="grid grid-cols-2 gap-8 mt-6">
        <div>
          <div className="mb-6 space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Consumo e potencial termico de disposição de água
            </h2>
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-factor"
              >
                (por breve descrição se houver)
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="enthalpy"
            >
              Volume total consumido de água:
            </label>
            <div className="inline-flex space-x-4">
              <Input id="enthalpy" placeholder="Volume" />
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
              Temperatura do ambiente
            </label>
            <div className="inline-flex items-center space-x-4">
              <Input id="explosion-limit" placeholder="Temperatura" />
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
        <div className="flex flex-col justify-end">
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="explosion-limit"
              >
                Temperatura da água do ambiente
              </label>
              <div className="inline-flex items-center space-x-4">
                <Input id="explosion-limit" placeholder="Temperatura" />
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
                Temperatura da água descartada
              </label>
              <div className="inline-flex items-center space-x-4">
                <Input id="explosion-limit" placeholder="Temperatura" />
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
        </div>
      </div>
      <Link to={"/pri/1"} className="flex justify-end">
        <Button className="bg-[#4CAF50] text-white">Proxima</Button>
      </Link>
    </div>
  );
}
