import { ItemsTable } from '@/components/Items-table'
import { Button } from '@/components/ui/button'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { useNavigate } from 'react-router-dom'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const InvSchema = z.object({
    pashe: z.string(),
})

type InvSchema = z.infer<typeof InvSchema>

export default function FouraF() {
    const { handleSubmit, setValue } = useForm({
        resolver: zodResolver(InvSchema),
    })

    const navigate = useNavigate()

    const handleFormSubmit = (data: any) => {
        console.log(data)
        navigate('/inventory/2')
    }

    return (
        <form
            className="flex h-full flex-col justify-between"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className="flex justify-center">
                <div className="flex w-full max-w-full flex-col gap-5 space-y-4 xl:w-1/2">
                    <h1 className="text-2xl font-bold">Fase de Inventário</h1>
                    <div className="max-w-[300px]">
                        <Select
                            onValueChange={(value) => setValue('pashe', value)}
                            required
                        >
                            <SelectTrigger id="phase-select">
                                <SelectValue placeholder="selecione aqui" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="inicial">Inicial</SelectItem>
                                <SelectItem value="intermediaria">
                                    Intermediária
                                </SelectItem>
                                <SelectItem value="final">Final</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">Adicionar fase intermediaria?</p>
                        <Button className="bg-green-500 text-white">+</Button>
                    </div>
                    <ItemsTable />
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="w-44 bg-green-400" type="submit">
                    Próximo
                </Button>
            </div>
        </form>
    )
}
