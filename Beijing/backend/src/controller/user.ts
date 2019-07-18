import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/User'

export const getAll = async (req: Request, res: Response) => {
  const repo = getManager().getRepository(User)
  const users = await repo.find()
  res.json(users)
}

export const save = async (req: Request, res: Response) => {
  const repo = getManager().getRepository(User)
  const newUser = repo.create(req.body)
  await repo.save(newUser)
  res.send(newUser)
}
