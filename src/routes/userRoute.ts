import { Router } from 'express'

import authModdlewares from '../middlewares/authMiddleware'

import UserControlle from '@/controllers/UserControlle'

const userRoutes = Router()

const userControlle = new UserControlle()

userRoutes.get('/', authModdlewares, userControlle.index)
userRoutes.post('/', userControlle.create)

export default userRoutes
