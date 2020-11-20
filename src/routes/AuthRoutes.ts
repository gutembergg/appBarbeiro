import AuthController from '@/controllers/AuthController'
import { Router } from 'express'

const authRoutes = Router()

const userControlle = new AuthController()

authRoutes.post('/', userControlle.authenticate)

export default authRoutes
