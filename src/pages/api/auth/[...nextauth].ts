import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    Credentials({
      name: 'Login',
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (!credentials) return null

        const { email, password } = credentials
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/local', {
          method: 'POST',
          body: new URLSearchParams({ identifier: email, password })
        })

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        }

        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.jwt = token.jwt
      return Promise.resolve(session)
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
