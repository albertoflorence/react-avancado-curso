import NextImage, { ImageProps } from 'next/image'

export type { ImageProps }

const Image = (props: ImageProps) => <NextImage {...props} />

export default Image
