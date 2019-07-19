import express, { Request, Response } from 'express'
import { getAll, signup, login, logout } from '../controller/user'

const router = express.Router()

router.get('/', getAll)
router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

export default router
