import express, { Request, Response } from 'express'
import cors from 'cors'
import session from 'express-session'

import postRouter from './routes/post'
import userRouter from './routes/user'

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const allowedOrigins = ['http://localhost:3000', 'https://cdpn.io']

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
  })
)
app.use(
  session({
    name: 'sid',
    secret: 'lzl',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
      sameSite: true,
      secure: isProduction,
    },
  })
)

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Index page with TypeScript')
})

app.use('/post', postRouter)
app.use('/user', userRouter)

export default app
