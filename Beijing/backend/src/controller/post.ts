import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Post } from '../entity/Post'

export const getAll = async (req: Request, res: Response) => {
  const postRepository = getManager().getRepository(Post)
  const posts = await postRepository.find()
  res.json(posts)
}

export const save = async (req: Request, res: Response) => {
  const postRepository = getManager().getRepository(Post)
  const newPost = postRepository.create(req.body)
  await postRepository.save(newPost)
  res.send(newPost)
}
