import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const PriSchema = z.object({
  abnr: z.string().transform(Number),
  radionucleotidio: z.string(),
  fonte: z.string().url(),
});

export default function TwentySixaPRI() {
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(PriSchema),
  });

  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    console.log(data);
    navigate("/rc/1");
  }


  return (
    <div className="bg-white max-w-4xl m-auto h-screen space-y-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <form  onSubmit={handleSubmit(handleFormSubmit)} className="flex-1">
            <div className="mb-6 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Prejuizo por radiação ionizante
              </h2>
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-factor"
                >
                  (Texto breve explicativo se tiver)
                </label>
                <CircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Composto Químico
                </Label>
                <Select>
                  <SelectTrigger id="residue-set">
                    <SelectValue placeholder="Selecione o composto" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="rdn"
                >
                  Radionuclídeo
                </label>
                <div className="inline-flex items-center space-x-4">
                  <Input
                    id="rdn"
                    placeholder="Insira aqui"
                    type="text"
                    required
                    {...register("radionucleotidio")}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="abnr"
                >
                  Abundância natural do radionuclídeo
                </label>
                <div className="inline-flex items-center space-x-4 justify-between">
                  <div className="inline-flex items-center space-x-4">
                    <Input
                      id="abnr"
                      placeholder="Insira aqui"
                      className="max-w-40"
                      type="number"
                      min="0"
                      required
                      {...register("abnr")}
                    />
                    <span>%</span>
                  </div>
                  <div className="inline-flex items-center space-x-4">
                    <Label>Fonte</Label>
                    <Input
                      id="bibliographic-source"
                      placeholder="Fonte bibliográfica"
                      required
                      {...register("fonte")}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                    <Button className="bg-green-500 text-white mt-2" type="submit">
                      Proximo
                    </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{""}</title>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
