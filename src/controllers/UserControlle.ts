import UserRepository from '@/repositories/UserRepository'
import { Request, Response } from 'express'

class UserControlle {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const userRepository = new UserRepository()

    const user = await userRepository.create({
      name,
      email,
      password
    })

    delete user.password

    return res.status(201).json(user)
  }
}

export default UserControlle
