import UserRepository from '@/repositories/UserRepository'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthController {
  public async authenticate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const userRepository = new UserRepository()

    const user = await userRepository.findByEmail(email)

    if (!user) {
      return res.status(404).json({ Error: 'user not found' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({ Error: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    delete user.password

    return res.json({
      user,
      token
    })
  }
}

export default AuthController
