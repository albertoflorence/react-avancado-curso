import Heading from 'components/Heading'

import * as S from './TextContentStyles'

export interface TextContentProps {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    {title && (
      <Heading line="left" lineColor="secondary">
        {title}
      </Heading>
    )}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
