import FormForgotPassword from 'components/FormForgotPassword'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}
