import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Post } from '../entity/Post'

export const getAll = async (req: Request, res: Response) => {
  const repo = getManager().getRepository(Post)
  const posts = await repo.find()
  res.json(posts)
}

export const save = async (req: Request, res: Response) => {
  const repo = getManager().getRepository(Post)
  const newPost = repo.create(req.body)
  await repo.save(newPost)
  res.send(newPost)
}
