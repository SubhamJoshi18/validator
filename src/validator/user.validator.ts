import { z } from 'zod'

export const signupBodySchema = z.object({
    email: z.string({
        required_error: 'Please enter your email address',
    }),
    password: z.string(),
})
