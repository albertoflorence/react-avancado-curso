import * as S from './FormProfileStyles'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Link from 'components/Link'

export interface FormProfileProps {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => {
  return (
    <S.Wrapper>
      <Heading line="bottom" lineColor="primary" color="black" size="small">
        My Profile
      </Heading>

      <S.Content>
        <TextField name="username" label="Username" initialValue={username} />
        <TextField name="email" label="E-mail" type="email" initialValue={email} disabled />
      </S.Content>
      <S.Buttons>
        <Button as={Link} text href={'/forgot-password?email=' + email}>
          Reset password
        </Button>
        <Button>SAVE</Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default FormProfile
