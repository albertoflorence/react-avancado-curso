import { AddShoppingCart, ShoppingCart, Menu, Search, Close } from '@styled-icons/material-outlined'

const icons = {
  AddShoppingCart,
  ShoppingCart,
  Menu,
  Search,
  Close
}

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  label: keyof typeof icons
}

const Icon = ({ label, ...props }: IconProps) => {
  const Component = icons[label]

  return <Component {...props}></Component>
}

export default Icon