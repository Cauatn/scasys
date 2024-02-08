import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CircleIcon } from '@radix-ui/react-icons'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const cptdaSchema = z.object({
    volume: z.string().transform(Number),
    temperature: z.string().transform(Number),
    waterTemperature: z.string().transform(Number),
    discardedWaterTemperature: z.string().transform(Number),
    volumeUnity: z.string(),
    ambientUnityTemperature: z.string(),
    waterTemperatureUnity: z.string(),
})

type cptdaSchema = z.infer<typeof cptdaSchema>

export default function TwentyFivePCTDA() {
    const { register, handleSubmit, setValue } = useForm({
        resolver: zodResolver(cptdaSchema),
    })

    const navigate = useNavigate()

    function handleFormSubmit(data: any) {
        console.log(data)
        navigate('/pri/1')
    }
    return (
        <div className="mx-auto flex max-w-3xl flex-col items-end bg-white p-6 pt-0">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="mt-6 grid grid-cols-2 gap-8">
                    <div>
                        <div className="mb-6 space-y-2">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Consumo e potencial termico de disposição de
                                água
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
                                className="mb-1 block text-sm font-medium text-gray-700"
                                htmlFor="volume"
                            >
                                Volume total consumido de água:
                            </label>
                            <div className="inline-flex space-x-4">
                                <Input
                                    required
                                    id="volume"
                                    placeholder="Volume"
                                    {...register('volume')}
                                />
                                <Select
                                    required
                                    onValueChange={(value) =>
                                        setValue('volumeUnity', value)
                                    }
                                >
                                    <SelectTrigger id="volume-unity">
                                        <SelectValue placeholder="Unidade" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="L">L</SelectItem>
                                        <SelectItem value="ml">ml</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="mb-1 block text-sm font-medium text-gray-700"
                                htmlFor="explosion-limit"
                            >
                                Temperatura do ambiente
                            </label>
                            <div className="inline-flex items-center space-x-4">
                                <Input
                                    required
                                    id="explosion-limit"
                                    placeholder="Temperatura"
                                    {...register('temperature')}
                                />
                                <Select
                                    required
                                    onValueChange={(value) =>
                                        setValue(
                                            'ambientUnityTemperature',
                                            value
                                        )
                                    }
                                >
                                    <SelectTrigger id="temperature-unity">
                                        <SelectValue placeholder="Unidade" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="K">
                                            Kelvin
                                        </SelectItem>
                                        <SelectItem value="C">°C</SelectItem>
                                        <SelectItem value="Fah">Fah</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-end">
                        <div>
                            <div className="mb-4">
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="explosion-limit"
                                >
                                    Temperatura da água do ambiente
                                </label>
                                <div className="inline-flex items-center space-x-4">
                                    <Input
                                        required
                                        id="explosion-limit"
                                        placeholder="Temperatura"
                                        {...register('waterTemperature')}
                                    />
                                    <Select
                                        required
                                        onValueChange={(value) =>
                                            setValue(
                                                'waterTemperatureUnity',
                                                value
                                            )
                                        }
                                    >
                                        <SelectTrigger id="residue-set">
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
                            <div className="mb-4">
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="disc-w"
                                >
                                    Temperatura da água descartada
                                </label>
                                <div className="inline-flex items-center space-x-4">
                                    <Input
                                        required
                                        id="disc-w"
                                        placeholder="Temperatura"
                                        {...register(
                                            'discardedWaterTemperature'
                                        )}
                                    />
                                    <Select
                                        required
                                        onValueChange={(value) =>
                                            setValue(
                                                'discardedWaterTemperatureUnity',
                                                value
                                            )
                                        }
                                    >
                                        <SelectTrigger id="disc-w">
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
                </div>
                <Button type="submit" className="bg-green-500 text-white">
                    Proxima
                </Button>
            </form>
        </div>
    )
}
