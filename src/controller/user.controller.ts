import { Request, Response, NextFunction } from 'express'
import * as Service from '../service/user.service'
import { signupBodySchema } from '../validator/user.validator'
import { z } from 'zod'
export const signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const createUser = await Service.signup(
            signupBodySchema.parse(req.body)
        )
        res.status(200).json(createUser)
    } catch (err) {
        next(err)
    }
}
