import { Router } from 'express'
import * as userController from '../controller/user.controller'
const router = Router()

router.post('/', userController.signUp)

export default router
