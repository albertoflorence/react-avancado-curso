import Button from 'components/Button'
import Icon from 'components/Icon'
import Link from 'components/Link'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
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
      <FormLink>
        Already have an account?{' '}
        <Link href="/login" internal>
          Sign In
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
