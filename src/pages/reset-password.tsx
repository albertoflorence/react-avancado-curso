import FormResetPassword from 'components/FormResetPassword'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  )
}
