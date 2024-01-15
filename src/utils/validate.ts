import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, Schema } from 'zod'
export const validate =
    (Schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await Schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            })
            return next()
        } catch (err: any) {
            next(err)
        }
    }

export const validatebyId =
    (Schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await Schema.parseAsync({
                params: req.params,
            })
            return next()
        } catch (err: any) {
            next(err)
        }
    }
