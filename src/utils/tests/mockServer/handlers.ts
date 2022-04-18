import { rest } from 'msw'
import { ResetPasswordProps } from 'services/register'
import { getApiUrl } from 'utils/helpers'

interface LoginReqBody {
  email: string
}

const forgotPassword = rest.post<LoginReqBody>(
  getApiUrl('/auth/forgot-password'),
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
  getApiUrl('/auth/reset-password'),
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
