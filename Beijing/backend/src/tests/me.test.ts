import { Connection, getManager } from 'typeorm'
import request from 'supertest'
import faker from 'faker'

import connectDatabase from '../utils/connectDatabase'
import app from '../app'
import { User } from '../entity/User'

let connection: Connection

const email = faker.internet.email()
const password = faker.internet.password()

beforeAll(async () => {
  connection = await connectDatabase()

  const repo = getManager().getRepository(User)
  const newUser = repo.create({ email, password })
  await repo.save(newUser)
})

afterAll(async () => {
  if (connection && connection.isConnected) {
    connection.close()
  }
})

describe('me', () => {
  test('1st test', async () => {
    const repo = getManager().getRepository(User)
    const users = await repo.find()

    const res = await request(app).get('/user')
    expect(res.body).toEqual(users)
  })
})
