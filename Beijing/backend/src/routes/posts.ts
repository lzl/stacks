import express, { Request, Response } from 'express'

const router = express.Router()

interface Posts {
  title: string
  content: string
}

const posts: Posts[] = [
  { title: 'Post 1', content: 'Content 1' },
  { title: 'Post 2', content: 'Content 2' },
]

router.get('/', (req: Request, res: Response) => {
  res.json(posts)
})

export default router
