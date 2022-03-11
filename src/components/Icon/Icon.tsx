import {
  AddShoppingCart,
  ShoppingCart,
  Menu,
  Search,
  Close,
  FavoriteBorder,
  Favorite
} from '@styled-icons/material-outlined'

import { ArrowForwardIos, ArrowBackIos } from '@styled-icons/material-rounded'

const icons = {
  AddShoppingCart,
  ShoppingCart,
  Menu,
  Search,
  Close,
  FavoriteBorder,
  Favorite,
  ArrowRight: ArrowForwardIos,
  ArrowLeft: ArrowBackIos
}

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  label: keyof typeof icons
}

const Icon = ({ label, ...props }: IconProps) => {
  const Component = icons[label]

  return <Component {...props}></Component>
}

export default Icon
