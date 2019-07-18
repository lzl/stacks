import express from 'express'

const router = express.Router()

const posts = [
  { title: 'Post 1', content: 'Content 1' },
  { title: 'Post 2', content: 'Content 2' },
]

router.get('/', (req, res) => {
  res.json(posts)
})

export default router
