import { Button, Icon, Link, TextField } from 'components'
import * as S from './FormSignInStyles'
import { FormWrapper, FormLink } from 'components'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField startIcon={<Icon label="Email" />} placeholder="Email" id="email" />
      <TextField
        startIcon={<Icon label="Lock" />}
        placeholder="Password"
        type="password"
        id="password"
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button fullWidth as="a" href="#" size="large">
        Sign in now
      </Button>
      <FormLink>
        Don&apos;t have an account?{' '}
        <Link href="/signup" internal>
          Sign Up
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
