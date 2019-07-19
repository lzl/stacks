import 'reflect-metadata'
import { createConnection, getConnectionOptions } from 'typeorm'

export default async () => {
  try {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV)
    await createConnection({ ...connectionOptions, name: 'default' })
  } catch (error) {
    console.log('TypeORM connection error: ', error)
  }
}
