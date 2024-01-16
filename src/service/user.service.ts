import Boom from '@hapi/boom'

import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { signupBodySchema } from '../validator/user.validator'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
    log: ['query', 'info'],
})

export const signup = async (user: z.infer<typeof signupBodySchema>) => {
    const { email, password } = user
    try {
        return await prisma.subham.create({
            data: {
                email: email,
                password: await bcrypt.hash(password, 10),
            },
            select: {
                id: true,
                email: true,
            },
        })
    } catch (err: any) {
        throw Boom.unauthorized('Something went wrong')
    }
}
