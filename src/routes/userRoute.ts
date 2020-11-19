import UserControlle from '@/controllers/UserControlle'
import { Router } from 'express'

const userRoutes = Router()

const userControlle = new UserControlle()

userRoutes.post('/', userControlle.create)

export default userRoutes
