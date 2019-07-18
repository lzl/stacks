import express, { Request, Response } from 'express'
import { getAll, save } from '../controller/post'

const router = express.Router()

router.get('/', getAll)
router.post('/', save)

export default router
