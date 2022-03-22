import Button from 'components/Button'
import Icon from 'components/Icon'
import Link from 'components/Link'
import TextField from 'components/TextField'
import { FormLink, FormWrapper } from 'components/Form'

import * as S from './FormSignInStyles'

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
