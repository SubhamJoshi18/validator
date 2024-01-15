import { ZodError } from 'zod'
import httpStatus from 'http-status-codes'

function buildError(err: any) {
    if (err instanceof ZodError) {
        return {
            code: httpStatus.BAD_REQUEST,
            message: httpStatus.getStatusText(httpStatus.BAD_REQUEST),
            details: err.issues.map((issue) => issue.message),
        }
    }

    if (err.isBoom) {
        return {
            code: err.output.status,
            message: err.output.payload.message || err.output.payload.error,
        }
    }

    return {
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
    }
}

export default buildError
