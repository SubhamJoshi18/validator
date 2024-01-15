import { Request, Response, NextFunction } from 'express'
import * as Service from '../service/amit.service'

export const amitGet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const get = await Service.getFunction()
        return res.status(200).json({ get })
    } catch (err: any) {
        next(err)
    }
}

export const amitGetbyid = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id: number = parseInt(req.params.id, 10)
    try {
        const getbyid = await Service.getfunctionbyID(id)
        return res.status(200).json({ getbyid })
    } catch (err: any) {
        next(err)
    }
}

export const amitpost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const post = await Service.createFunction(req.body)
        return res.status(200).json({ post })
    } catch (err: any) {
        next(err)
    }
}

export const amitupate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id: number = parseInt(req.params.id, 10)
    try {
        const update = await Service.updateFunction(id, req.body)
        return res.status(200).json({ update })
    } catch (err: any) {
        next(err)
    }
}

export const amitdelete = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id: number = parseInt(req.params.id, 10)
    try {
        const removed = await Service.deleteFunction(id)
        return res.status(200).json({ removed })
    } catch (err: any) {
        next(err)
    }
}
