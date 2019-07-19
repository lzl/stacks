import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/User'

export const getAll = async (req: Request, res: Response) => {
  const repo = getManager().getRepository(User)
  const users = await repo.find()
  res.json(users)
}

export const signup = async (req: Request, res: Response) => {
  const repo = getManager().getRepository(User)
  const newUser = repo.create(req.body)
  await repo.save(newUser)
  res.send(newUser)
}

export const login = async (req: Request, res: Response) => {
  const { userId } = req.session
  if (userId) {
    res.json({ userId })
  } else {
    const repo = getManager().getRepository(User)
    const user = await repo.find()
    req.session.userId = user[0].id
    res.json(user)
  }
}

export const logout = (req: Request, res: Response) => {
  req.session.destroy(err => {
    if (!err) {
      res.clearCookie('sid')
      res.send('cookie cleared')
    }
  })
}
