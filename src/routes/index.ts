import { Router } from 'express'
import userRoutes from './userRoute'

const routes = Router()

routes.use('/users', userRoutes)

export default routes
