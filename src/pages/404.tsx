import Container from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          description="Ops... this page does not exist. Go back to store and enjoy our offers"
          title="404: Not found"
          toHome
        />
      </Container>
    </Base>
  )
}
