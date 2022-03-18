import { Button, Icon, Link, TextField } from 'components'
import * as S from './FormSignUpStyles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField startIcon={<Icon label="AccountCircle" />} placeholder="Name" id="name" />
      <TextField startIcon={<Icon label="Email" />} placeholder="Email" id="email" />
      <TextField
        startIcon={<Icon label="Lock" />}
        placeholder="Password"
        type="password"
        id="password"
      />
      <TextField
        startIcon={<Icon label="Lock" />}
        placeholder="Confirm password"
        type="password"
        id="confirm-password"
      />

      <Button fullWidth as="a" href="#" size="large">
        Sign up now
      </Button>
      <S.FormLink>
        Already have an account?{' '}
        <Link href="/login" internal>
          Sign In
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
