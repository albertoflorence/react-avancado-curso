import { build, fake } from '@jackfranklin/test-data-bot'

export interface User {
  username: string
  email: string
  password: string
}

export const createUser = build<User>({
  fields: {
    username: fake(f => f.internet.userName().slice(0, 15)),
    password: fake(f => f.internet.password()),
    email: ''
  },
  postBuild: user => ({
    ...user,
    email: user.username.toLowerCase() + '-e2e@wongames.com'
  })
})
