import dotenv from 'dotenv'

import connectDatabase from './utils/connectDatabase'
import startServer from './utils/startServer'

dotenv.config()
;(async () => {
  await connectDatabase()
  await startServer()
})()
