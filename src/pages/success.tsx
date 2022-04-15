import { getRecommended } from 'services'
import Success, { SuccessTemplateProps } from 'templates/Success'

export default function Index(props: SuccessTemplateProps) {
  return <Success {...props} />
}

export const getStaticProps = async () => {
  const recommended = await getRecommended()
  return {
    revalidate: 60 * 60,
    props: {
      recommended
    }
  }
}
