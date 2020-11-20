import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface ITokenPayload {
  id: string
  iat: number
  exp: number
}

/* interface Middleware {
  <T>(req: Request & T, res: Response, next: NextFunction): void
} */
export default function authMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ Error: 'Not authorizated' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, 'secret')

    const { id } = data as ITokenPayload

    req.userId = id

    return next()
  } catch (error) {
    return res.status(401).json({ Error: 'Not Authorizated' })
  }
}
