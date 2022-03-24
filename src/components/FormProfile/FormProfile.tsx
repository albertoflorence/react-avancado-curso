import * as S from './FormProfileStyles'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

export interface FormProfileProps {
  userName?: string
  email?: string
}

const FormProfile = ({ userName, email }: FormProfileProps) => {
  return (
    <S.Wrapper>
      <Heading line="bottom" lineColor="primary" color="black" size="small">
        My Profile
      </Heading>

      <S.Content>
        <TextField name="userName" label="Name" initialValue={userName} />
        <TextField name="email" label="E-mail" type="email" initialValue={email} disabled />
        <TextField
          name="password"
          type="password"
          label="Password"
          placeholder="Type your password"
        />
        <TextField
          name="newPassword"
          type="password"
          label="New Password"
          placeholder="New password"
        />
      </S.Content>

      <Button size="large">SAVE</Button>
    </S.Wrapper>
  )
}

export default FormProfile
