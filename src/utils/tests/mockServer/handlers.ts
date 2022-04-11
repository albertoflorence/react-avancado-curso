import { rest } from 'msw'

interface LoginReqBody {
  email: string
}

export const handlers = [
  rest.post<LoginReqBody>(
    process.env.NEXT_PUBLIC_API_URL + '/auth/forgot-password',
    (req, res, ctx) => {
      const { email } = req.body

      if (email.includes('invalid')) {
        return res(
          ctx.status(400),
          ctx.json({
            message: [{ messages: [{ message: 'This email does not exist' }] }]
          })
        )
      } else {
        res(
          ctx.status(200),
          ctx.json({
            ok: true
          })
        )
      }
    }
  )
]
