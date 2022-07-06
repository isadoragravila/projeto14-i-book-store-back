import { Router } from 'express'
import { signUp, signIn } from '../controllers/authController.js'
import authValidation from '../middlewares/authValidation.js'
import loginValidation from '../middlewares/loginValidation.js'

const router = Router()

router.post('/sign-up', authValidation, signUp)
router.post('/sign-in', loginValidation, signIn)

export default router
