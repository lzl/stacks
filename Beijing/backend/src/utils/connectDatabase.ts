import 'reflect-metadata'
import { createConnection } from 'typeorm'

export default async () => {
  try {
    await createConnection()
  } catch (error) {
    console.log('TypeORM connection error: ', error)
  }
}
