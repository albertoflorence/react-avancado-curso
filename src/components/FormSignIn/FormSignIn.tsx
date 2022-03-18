import { Button, Icon, Link, TextField } from 'components'
import * as S from './FormSignInStyles'

const FormSignIn = () => (
  <S.Wrapper>
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
      <S.FormLink>
        Don&apos;t have an account?{' '}
        <Link href="/login" internal>
          Sign Up
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
