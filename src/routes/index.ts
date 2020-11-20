import { Router } from 'express'

import authRoutes from './AuthRoutes'
import userRoutes from './userRoute'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/auth', authRoutes)

export default routes
