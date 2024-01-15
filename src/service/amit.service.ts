import Boom from '@hapi/boom'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getFunction = async () => {
    try {
        return await prisma.todos.findMany({
            select: {
                id: true,
                title: true,
                status: true,
            },
        })
    } catch (err: any) {
        throw Boom.notFound('Error getbyid')
    }
}

export const getfunctionbyID = async (id: number) => {
    try {
        return await prisma.todos.findUniqueOrThrow({
            where: {
                id: id,
            },
        })
    } catch (err: any) {
        throw Boom.notFound('Error getbyid')
    }
}

export const createFunction = async (body: any) => {
    const { title, status } = body
    try {
        return await prisma.todos.create({
            data: {
                title,
                status,
            },
            select: {
                id: true,
                title: true,
                status: true,
            },
        })
    } catch (err: any) {
        throw Boom.notFound('Error on posting')
    }
}

export const updateFunction = async (id: number, body: any) => {
    const { title, status } = body
    try {
        return await prisma.todos.update({
            where: {
                id: id,
            },
            data: {
                title,
                status,
            },
            select: {
                id: true,
                title: true,
                status: true,
            },
        })
    } catch (err: any) {
        throw Boom.notFound('Error updating')
    }
}

export const deleteFunction = async (id: number) => {
    try {
        return await prisma.todos.delete({
            where: {
                id: id,
            },
        })
    } catch (err: any) {
        throw Boom.notFound('Error deleting')
    }
}
