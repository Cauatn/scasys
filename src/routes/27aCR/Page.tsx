import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import {  CircleIcon } from "@radix-ui/react-icons";
import { HintQuestion } from "@/components/hint-question";

import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

const ResourcesConsumptionSchema = z.object({
  mtcd: z.number().transform(Number),
  rzt: z.string().transform(Number),
  menup: z.string().transform(Number),
})

type ResourcesConsumptionSchema = z.infer<typeof ResourcesConsumptionSchema>

export default function TwentySevenaCR() {
  const { register, handleSubmit, setValue } = useForm(
		{resolver: zodResolver(ResourcesConsumptionSchema)}
	);
	
	const navigate = useNavigate();

	function handleFormSubmit(data: any) {
		console.log(data);
	}

  return (
    <div className="bg-white p-6 max-w-4xl m-auto h-screen space-y-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex-1">
            <div className="mb-6 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Consumo de recursos
              </h2>
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="corrosion-factor"
                >
                  O cálculo da submetrica (RC) :
                </label>
                <CircleIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-6">
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
              <div className="inline-flex space-x-2 justify-between">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700 inline-flex space-x-2 justify-between"
                    htmlFor="mtcd"
                  >
                    <span>mtcd</span>
                    <HintQuestion/>
                  </label>
                  <Input id="mtcd" placeholder="Insira aqui" type="number" {...register("mtcd")} min="0"/>
                </div>
                <div className="flex flex-col space-y-2 items-center">
                  <label
                    className="text-sm font-medium text-gray-700 inline-flex space-x-2"
                    htmlFor="rzt"
                  >
                    <span>Razao de recursos renovaveis total</span>
                    <HintQuestion/>
                  </label>

                  <Input id="rzt" placeholder="Insira aqui" type="number" {...register("rzt")} min="0"/>
                </div>
              </div>
              <div className="inline-flex space-x-2 justify-between">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700 inline-flex space-x-2 justify-between"
                    htmlFor="menup"
                  >
                    <span>menup</span>
                   <HintQuestion/>
                  </label>
                  <Input id="menup" placeholder="Insira aqui" type="number" {...register("menup")} min="0"/>
                </div>
                <div className="flex justify-end size-fit items-end">
                  <Button  
                    className="bg-green-500 text-white mt-2"
                    type="submit"
                    //onClick={()=>navigate("/rc/2")}
                  >
                      Proximo
                    </Button>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
       </div>
  );
}
