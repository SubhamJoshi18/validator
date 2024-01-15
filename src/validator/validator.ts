import { z } from 'zod'

export const getTodos = z.object({
    params: z.object({
        id: z.string().refine((value) => !isNaN(Number(value)), {
            message: 'ID SHOULD BE A VALID NUMBER',
        }),
    }),
})

export const createTodos = z.object({
    body: z.object({
        title: z.string({
            required_error: 'HAL NA TERO TITLE',
        }),
        status: z.enum(['completed', 'status'], {
            required_error: 'YO DUITA AUTA HUNU PARCHA HAI',
        }),
    }),
})

export const updateTodos = z.object({
    params: z.object({
        id: z.string().refine((value: any) => !isNaN(Number(value)), {
            message: 'ID SHOULD BE A VALID NUMBER',
        }),
    }),
})

export const deleteTodos = z.object({
    params: z.object({
        id: z.string().refine((value: any) => !isNaN(Number(value)), {
            message: 'ID SHOULD BE A VALID NUMBER',
        }),
    }),
})
