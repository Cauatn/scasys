import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleIcon } from "@radix-ui/react-icons";
import { SelectContent } from "@radix-ui/react-select";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const HolistMetricalSchema = z.object({
  time: z.string().transform(Number),
  duration: z.string(),
});

type HolistMetricalSchema = z.infer<typeof HolistMetricalSchema>;

export default function TwentyEightaCR() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(HolistMetricalSchema),
  });

  const navigate = useNavigate();

  function handleFormSubmit(data: any) {
    console.log(data);
    navigate("/")
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col max-w-full h-full items-center"
    >
      <div className="flex flex-col lg:flex-row lg:space-x-8 h-full">
        <div className="mb-6 space-y-20 ">
          <div className="mb-6 space-y-2">
		    <h2 className="text-lg font-semibold text-gray-900">
              Metrica ambiental holística
            </h2>
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="corrosion-factor"
              >
                (por breve descrição de tiver)
              </label>
              <CircleIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Duração (Tempo) total do procedimento
                </label>
                <div className="inline-flex items-center space-x-4">
                  <Input
                    placeholder="Digite aqui"
                    type="number"
                    className="max-w-44"
                    {...register("time")}
                  />
                  <Select
                    onValueChange={(value) => setValue("duration", value)}
                    defaultValue="horas"
                  >
                    <SelectTrigger id="duration" className="max-w-40">
                      <SelectValue placeholder="Duração" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="dias">Dias</SelectItem>
                      <SelectItem value="horas">Horas</SelectItem>
                      <SelectItem value="minutos">Minutos</SelectItem>
                      <SelectItem value="segundos">segundos</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="secondary">?</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <Button className="bg-green-500 text-white" type="submit">
              Proximo
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
