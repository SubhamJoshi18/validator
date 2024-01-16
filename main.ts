import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import Router from './src/routes/amit.router'
import buildError from './src/utils/build-error'
import httpStatus from 'http-status-codes'
import userRoute from './src/routes/user.router'
const app = express()

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on${port}`)
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/amit', Router)
app.use('/register', userRoute)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const error = buildError(err)
    res.status(httpStatus.BAD_GATEWAY).json({ error })
})

export default app
