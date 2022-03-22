import Icon from 'components/Icon'
import Image from 'components/Image'
import Slider, { SliderSettings } from 'components/Slider'
import { useEffect, useRef, useState } from 'react'
import * as S from './GalleryStyles'
import SlickSlider from 'react-slick'

export interface GalleryImageProps {
  src: string
  alt: string
}

export interface GalleryProps {
  items: GalleryImageProps[]
}

const makeResponsiveSettings = (...args: [number, number][]) =>
  args.map(([breakpoint, slidesToShow]) => ({
    breakpoint,
    settings: { slidesToShow, arrows: false }
  }))

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <Icon label="ArrowRight" aria-label="next slide" />,
  prevArrow: <Icon label="ArrowLeft" aria-label="prev slide" />,
  responsive: makeResponsiveSettings([1375, 3.2], [1024, 2.2], [768, 2.2])
}

const modalSettings: SliderSettings = {
  ...settings,
  slidesToShow: 1,
  responsive: undefined
}

const Gallery = ({ items, ...props }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const handleOpen = (index: number) => {
    if (isDragging) return
    setIsOpen(true)
    slider.current?.slickGoTo(index, true)
  }
  const handleClose = () => setIsOpen(false)
  const handleStartDrag = () => setIsDragging(true)
  const handleEndDrag = () => setIsDragging(false)

  const slider = useRef<SlickSlider>(null)

  return (
    <S.Wrapper {...props}>
      <Slider
        beforeChange={handleStartDrag}
        afterChange={handleEndDrag}
        ref={slider}
        settings={settings}
      >
        {items.map(({ alt, src }, index) => (
          <Image
            width={295}
            height={165}
            onClick={() => handleOpen(index)}
            role="button"
            key={alt}
            src={src}
            alt={`Thumb - ${alt}`}
          />
        ))}
      </Slider>

      <Modal open={isOpen} onClose={handleClose}>
        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map(({ alt, src }) => (
              <Image width={1200} height={675} key={`gallery - ${alt}`} src={src} alt={alt} />
            ))}
          </Slider>
        </S.Content>
      </Modal>
    </S.Wrapper>
  )
}

export interface ModalProps {
  open: boolean
  children?: React.ReactNode
  onClose?: () => void
}

const Modal = ({ open, children, onClose }: ModalProps) => {
  useEffect(() => {
    if (onClose) {
      const handleKeyUp = ({ key }: KeyboardEvent) => key === 'Escape' && onClose()
      window.addEventListener('keyup', handleKeyUp)

      return () => window.removeEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <S.Modal
      onClick={e => {
        if (e.target != e.currentTarget) return
        if (!onClose) return
        onClose()
      }}
      open={open}
      aria-label="modal"
      aria-hidden={!open}
    >
      <Icon title="close" label="Close" onClick={onClose} />
      {children}
    </S.Modal>
  )
}

export default Gallery
