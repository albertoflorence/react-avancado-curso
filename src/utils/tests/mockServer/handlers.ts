import { rest } from 'msw'
import { ResetPasswordProps } from 'services/register'

const getUrl = (url: string): string => process.env.NEXT_PUBLIC_API_URL + url

interface LoginReqBody {
  email: string
}

const forgotPassword = rest.post<LoginReqBody>(
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
      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      )
    }
  }
)

const resetPassword = rest.post<ResetPasswordProps>(
  getUrl('/auth/reset-password'),
  (req, res, ctx) => {
    const { code, password, passwordConfirmation } = req.body

    if (code.includes('invalid') || password !== passwordConfirmation) {
      return res(
        ctx.status(400),
        ctx.json({
          message: [{ messages: [{ message: 'invalid params' }] }]
        })
      )
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      )
    }
  }
)

export const handlers = [forgotPassword, resetPassword]
