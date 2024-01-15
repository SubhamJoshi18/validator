import { Router } from 'express'
import * as Controller from '../controller/amit.controller'
import * as validator from '../validator/validator'
import { validate, validatebyId } from '../utils/validate'
const router = Router()

router.get('/', Controller.amitGet)
router.get('/:id', validatebyId(validator.getTodos), Controller.amitGetbyid)
router.post('/', validate(validator.createTodos), Controller.amitpost)
router.put('/:id', validatebyId(validator.updateTodos), Controller.amitupate)
// router.patch('/:id')
router.delete(
    '/:id',
    validatebyId(validator.deleteTodos),
    Controller.amitdelete
)

export default router
