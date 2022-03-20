import {
  AddShoppingCart,
  ShoppingCart,
  Menu,
  Search,
  Close,
  FavoriteBorder,
  Favorite,
  Email,
  Lock,
  AccountCircle
} from '@styled-icons/material-outlined'

import { ArrowForwardIos, ArrowBackIos } from '@styled-icons/material-rounded'
import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

const icons = {
  AddShoppingCart,
  ShoppingCart,
  Menu,
  Search,
  Close,
  FavoriteBorder,
  Favorite,
  ArrowRight: ArrowForwardIos,
  ArrowLeft: ArrowBackIos,
  Email,
  Lock,
  AccountCircle,
  Apple,
  Linux,
  Windows
}

type IconProps = {
  label: keyof typeof icons
} & React.ComponentPropsWithoutRef<typeof Menu>

const Icon = ({ label, ...props }: IconProps) => {
  const Component = icons[label]

  return <Component {...props}></Component>
}

export default Icon
