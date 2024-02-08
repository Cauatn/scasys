import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
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

const CDESchema = z.object({
    cmde: z.string().transform(Number),
    dp: z.string().transform(Number),
    cmdeUnity: z.string(),
    dpUnity: z.string(),
    bibliographicSource: z.string().url(),
})

type CDESchema = z.infer<typeof CDESchema>

export default function TwentyaCDE() {
    const { register, handleSubmit, setValue } = useForm({
        resolver: zodResolver(CDESchema),
    })

    const navigate = useNavigate()

    const handleFormSubmit = (data: any) => {
        console.log(data)
        navigate('/gw/1')
    }
    return (
        <form
            className="m-auto h-screen max-w-4xl bg-white p-6 "
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className="mt-6 grid grid-cols-2 gap-8">
                <div>
                    <div className="mb-6 space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Consumo de energia elétrica
                        </h2>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">
                                (por breve descrição se houver)
                            </label>
                            <CircleIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="cmde"
                        >
                            Consumo Médio diário de energia elétrica mundial per
                            capita :
                        </label>
                        <div className="inline-flex space-x-4">
                            <Input
                                id="cmde"
                                placeholder="Tempo"
                                type="number"
                                required
                                {...register('cmde')}
                            />
                            <Select
                                onValueChange={(value) =>
                                    setValue('cmdeUnity', value)
                                }
                                required
                            >
                                <SelectTrigger id="residue-set">
                                    <SelectValue placeholder="Unidade" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Kg">Kg</SelectItem>
                                    <SelectItem value="g">g</SelectItem>
                                    <SelectItem value="L">L</SelectItem>
                                    <SelectItem value="mol">mol</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="dp"
                        >
                            Duração do procedimento :
                        </label>
                        <div className="inline-flex items-center space-x-4">
                            <Input
                                id="dp"
                                placeholder="Tempo"
                                type="number"
                                required
                                {...register('dp')}
                            />
                            <Select
                                onValueChange={(value) =>
                                    setValue('dpUnity', value)
                                }
                                required
                            >
                                <SelectTrigger id="dp-unity">
                                    <SelectValue placeholder="Unidade" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Kg">Kg</SelectItem>
                                    <SelectItem value="g">g</SelectItem>
                                    <SelectItem value="L">L</SelectItem>
                                    <SelectItem value="mol">mol</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="mb-4">
                        <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="bibliographic-source-3"
                        >
                            Fonte bibliográfica:
                        </label>
                        <Input
                            id="bibliographic-source-3"
                            placeholder="Fonte bibliográfica"
                            required
                            {...register('bibliographicSource')}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="bg-[#4CAF50] text-white" type="submit">
                    Proxima
                </Button>
            </div>
        </form>
    )
}
