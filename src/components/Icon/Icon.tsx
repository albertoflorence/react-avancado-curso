import { Menu } from '@styled-icons/material-outlined/Menu'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { Search } from '@styled-icons/material-outlined/Search'
import { Close } from '@styled-icons/material-outlined/Close'
import { Favorite } from '@styled-icons/material-outlined/Favorite'
import { Email } from '@styled-icons/material-outlined/Email'
import { Lock } from '@styled-icons/material-outlined/Lock'
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder'
import { ArrowForwardIos } from '@styled-icons/material-outlined/ArrowForwardIos'
import { ArrowBackIos } from '@styled-icons/material-outlined/ArrowBackIos'
import { Download } from '@styled-icons/material-outlined/Download'
import { Add } from '@styled-icons/material-outlined/Add'
import { CreditCard } from '@styled-icons/material-outlined/CreditCard'
import { FormatListBulleted } from '@styled-icons/material-outlined/FormatListBulleted'
import { ExitToApp } from '@styled-icons/material-outlined/ExitToApp'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { FilterList } from '@styled-icons/material-outlined/FilterList'

import { Windows } from '@styled-icons/fa-brands/Windows'
import { Apple } from '@styled-icons/fa-brands/Apple'
import { Linux } from '@styled-icons/fa-brands/Linux'
import * as S from './IconStyles'
import React from 'react'

const icons = {
  Menu,
  AddShoppingCart,
  ShoppingCart,
  Search,
  Close,
  FavoriteBorder,
  Favorite,
  ArrowRight: ArrowForwardIos,
  ArrowLeft: ArrowBackIos,
  Email,
  Lock,
  AccountCircle,
  Download,
  Apple,
  Linux,
  Windows,
  Add,
  CreditCard,
  List: FormatListBulleted,
  ExitToApp,
  KeyboardArrowDown,
  FilterList
}

export type Color = 'primary' | 'secondary' | 'white' | 'black' | 'gray'

export type IconProps = {
  label: keyof typeof icons
  color?: Color
  badge?: number
} & React.ComponentPropsWithoutRef<typeof Menu>

const Icon = ({ label, color, badge, ...props }: IconProps) => {
  const Component = icons[label]

  return (
    <S.Wrapper color={color}>
      {!!badge && <Badge aria-label="Icon Badge">{badge}</Badge>}
      <Component {...props} />
    </S.Wrapper>
  )
}

interface BadgeProps {
  children?: number
}

const Badge = ({ children, ...props }: BadgeProps) => (
  <S.BadgeWrapper {...props}>{children}</S.BadgeWrapper>
)

export default Icon
