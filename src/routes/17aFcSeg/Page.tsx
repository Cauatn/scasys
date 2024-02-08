import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { SelectContent } from '@radix-ui/react-select'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'

const SegSchema = z.object({
    tmc: z.string().transform(Number),
    tmcUnity: z.string(),
    temperature: z.string().transform(Number),
    temperatureUnity: z.string(),
    corrosiveActivity: z.string(),
    bibliographicSource: z.string(),
})

type SegSchema = z.infer<typeof SegSchema>

export default function SeventeenFcSeg() {
    const { register, handleSubmit, setValue } = useForm({
        resolver: zodResolver(SegSchema),
    })

    const navigate = useNavigate()

    const handleFormSubmit = (data: any) => {
        console.log(data)
        navigate('/ps/6')
    }

    return (
        <form
            className="m-auto h-screen max-w-4xl space-y-8 bg-white p-6"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="flex-1">
                        <div className="mb-6 space-y-2">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Segurança
                            </h2>
                            <div className="flex items-center justify-between">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="corrosion-factor"
                                >
                                    Fator de corrosividade
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
                                        <SelectItem value="option1">
                                            Option 1
                                        </SelectItem>
                                        <SelectItem value="option2">
                                            Option 2
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="corrosion-rate"
                                >
                                    Taxa máxima de corrosão
                                </label>

                                <div className="inline-flex items-center space-x-4">
                                    <Input
                                        id="corrosion-rate"
                                        placeholder="Insira aqui"
                                        className="max-w-28"
                                        type="number"
                                        required
                                        {...register('tmc')}
                                    />
                                    <Select
                                        onValueChange={(value) =>
                                            setValue('tmcUnity', value)
                                        }
                                    >
                                        <SelectTrigger id="unity">
                                            <SelectValue placeholder="Unidade" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="Kg">
                                                Kg
                                            </SelectItem>
                                            <SelectItem value="g">g</SelectItem>
                                            <SelectItem value="L">L</SelectItem>
                                            <SelectItem value="mol">
                                                mol
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="temperature"
                                >
                                    Temperatura
                                </label>
                                <div className="inline-flex items-center space-x-4">
                                    <Input
                                        id="temperature"
                                        placeholder="Insira aqui"
                                        className="max-w-28"
                                        type="number"
                                        {...register('temperature')}
                                    />
                                    <Select
                                        onValueChange={(value) =>
                                            setValue('temperatureUnity', value)
                                        }
                                    >
                                        <SelectTrigger id="temp">
                                            <SelectValue placeholder="Unidade" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="K">
                                                Kelvin
                                            </SelectItem>
                                            <SelectItem value="C">
                                                °C
                                            </SelectItem>
                                            <SelectItem value="Fah">
                                                Fah
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 ">
                        <div className="mt-12 flex flex-col justify-end space-y-6">
                            <div className="flex flex-col space-y-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="corrosive-activity"
                                >
                                    Apresenta atividade corrosiva em alumínio ou
                                    aço?
                                </label>
                                <div className="flex space-x-4">
                                    <ToggleGroup
                                        type="single"
                                        defaultValue="n"
                                        className="space-x-2"
                                        onValueChange={(value) => {
                                            setValue('corrosiveActivity', value)
                                        }}
                                    >
                                        <ToggleGroupItem
                                            value="sim"
                                            className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
                                        >
                                            S
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="nao"
                                            className="h-10 w-10 rounded-md border data-[state=on]:bg-green-400"
                                        >
                                            N
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="bibliographic-source"
                                >
                                    Fonte bibliográfica
                                </label>
                                <Input
                                    id="bibliographic-source"
                                    placeholder="Digite a fonte bibliográfica"
                                    type="text"
                                    required
                                    {...register('bibliographicSource')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <Button className="bg-green-500 text-white" type="submit">
                        Proximo
                    </Button>
                </div>
            </div>
        </form>
    )
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
            <title>{''}</title>
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}
